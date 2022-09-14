import React from 'react';

function TestLogin(props) {
  return (
    <div>
      {/* <h1>Log In</h1> */}
      <form>
        <input
          id="inputBox"
          type="text"
          placeholder="Username"
          required
          onChange={(e) => {props.setLogInUsername(e.target.value)}}
        />
        <input
          id="inputBox"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => {props.updateLogInPassword(e.target.value)}}
        />
      </form>
      <button id="logInBtn" type="submit" onClick={() => {props.logIn()}}>Log In</button>
    </div>

  );
}

export default TestLogin;
