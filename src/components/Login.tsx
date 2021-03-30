import * as React from 'react';
import { store } from '../App';
import jwt_decode from "jwt-decode";

const axios = require('axios').default;

const LoginComponent: React.FC = () => {

  const {state, dispatch} = React.useContext(store);

  const createSession = (jwt: string):void => {
    localStorage.setItem('JWT', jwt)
    let jwt_payload = jwt_decode(jwt)
    dispatch({type: 'SET_USER_OBJ', payload: jwt_payload})
  }

  const loginAttempt: any = (event: any):void => {
    event.preventDefault();

    let usernameElement = document.getElementById("username") as HTMLInputElement;
    let passwordElement = document.getElementById("password") as HTMLInputElement;

    interface ILoginrequestObject {
      username: string | null;
      password: string | null;
    };

    let requestObject: ILoginrequestObject = {username: null, password: null};
    requestObject.username = usernameElement ? usernameElement.value : null;
    requestObject.password = passwordElement ? passwordElement.value : null;

    axios.post("http://localhost:8000/authenticate", requestObject)
    .then((res: any) => {
      if (res.status == 200) {
        console.log(res.data.jwt_token)
        createSession(res.data.jwt_token)
      }
    })
    .catch((err: any) => console.log(err));
  };
 
  return (
    <>
      <div id="login-wrapper">
        <p id="login-heading">Barbell Club</p>
        <form id="login-form">
          <label>
            Username
          </label>
          <input id="username" type="text" name="username"/>
          <label>
            Password
          </label>
          <input id="password" type="password" name="password"/>
        </form>
      </div>
      <button id="login-button" onClick={loginAttempt}>
        Login
      </button>
    </>
  )
};

export default LoginComponent;