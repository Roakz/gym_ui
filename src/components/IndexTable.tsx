import Table from 'react-bootstrap/Table';
import React, {useEffect} from 'react';
import axiosClient from '../configs/axiosConfig';
import {Dispatch, SetStateAction} from 'react';

interface IndexTableProps {
  columnHeaders: Array<String>
  entity: String
  userData?: Array<any>
  createAble: boolean
  setCreatable?: Dispatch<SetStateAction<boolean>>;
  setUserData?: Dispatch<SetStateAction<boolean>>;
  fetchUsers?: Function;
}

interface IUserObject {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  username: string;
  role: string;
  passwordReset: boolean;
  password: string;
}

function IndexTable(props: IndexTableProps){  

  const createAction = ():void =>{
    let dataObj: any;
    if (props.entity === "User") {
      let userObj: IUserObject = {
        firstName: (document.getElementById("firstname") as HTMLInputElement).value,
        lastName: (document.getElementById("lastname") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        mobilePhone: (document.getElementById("phone") as HTMLInputElement).value,
        username: (document.getElementById("username") as HTMLInputElement).value,
        role: (document.getElementById("role-options") as HTMLInputElement).value,
        passwordReset: true,
        password: "test"
      }
      dataObj = userObj
    }

    axiosClient.post('user', dataObj)
    .then((res: any) => {
      if (res.status === 200) {
        if (props.setCreatable){
          props.setCreatable(false)
          if (props.fetchUsers) {
            props.fetchUsers()
          }
        }
      }
    })
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{props.entity + "Id"}</th>
            {props.columnHeaders.map(function(element, index){
              return <th key={index}>{element}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {props.entity === "User" && props.userData && props.userData.map((userObj: any) => {
            console.log(userObj)
            return (
              <tr>
                <td>{userObj.userId}</td>
                <td>{userObj.fullName}</td>
                <td>{userObj.username}</td>
                <td>{userObj.email}</td>
                <td>{userObj.phone}</td>
                <td>{userObj.role}</td>
                <td>{userObj.resetLink}</td>
              </tr> 
            )
          })}
          { props.createAble && 
          <tr>
            <td>
              * Populated on save
            </td>
            <td>
              <input id="firstname" type="text" name="firstname" placeholder="firstname"/>
              <input id="lastname" type="text" name="secondname" placeholder="secondname"/>
            </td>
            <td>
              <input id="username" type="text" name="username" placeholder="username"/>
            </td>
            <td>
              <input id="email" type="text" name="email" placeholder="email"/>
            </td>
            <td>
              <input id="phone" type="text" name="phone" placeholder="phone"/>
            </td>
            <td>
              <select id="role-options" name="roles">
                <option value="Trainee">Trainee</option>
                <option value="Trainer">Trainer</option>
                <option value="Admin">Admin</option>
              </select>
            </td>
            <td>
              * Populated on save
            </td>
            <td><button onClick={createAction}>save</button></td>
          </tr>
          }
        </tbody>
      </Table>
      <hr></hr>
    </>
  )
};

export default IndexTable;