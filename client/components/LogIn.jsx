import React, { Component } from 'react';
import { render } from 'react-dom';

function LogIn(props) {
  return (
    <div>
      <h1>Log In</h1>
      <div>
        <input id='inputBox'
          onChange={(e) => {props.updateLogInUsername(e.target.value)}}
          value={props.logInUsername}
          placeholder='Username'
          type='text'
        />
        <input id='inputBox'
          onChange={(e) => {props.updateLogInPassword(e.target.value)}}
          value={props.logInPassword}
          placeholder='Password'
          type='text'
        />
        <div>
          <button id='logInBtn' onClick={() => {props.logIn()}}>
            Log In
          </button>
        </div>
      </div>
    </div>
  )
};

export default LogIn;