import * as React from 'react';

const LoginComponent: React.FC = () => {
  return (
    <>
      <div id="login-wrapper">
        <p id="login-heading">Barbell Club</p>
        <form id="login-form">
          <label>
            Username
          </label>
          <input type="text" name="username"/>
          <label>
            Password
          </label>
          <input type="password" name="password"/>
        </form>
      </div>
      <button id="login-button">
        Login
      </button>
    </>
  )
};

export default LoginComponent;