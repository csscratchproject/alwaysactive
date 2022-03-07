import React, { Component } from 'react';
import { render } from 'react-dom';

function SignUp(props) {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input
          onChange={(e) => {props.updateSignUpUsername(e.target.value)}}
          value={props.signUpUsername}
          placeholder='Username'
          type='text'
        />
        <input
          onChange={(e) => {props.updateSignUpPassword(e.target.value)}}
          value={props.signUpPassword}
          placeholder='Password'
          type='text'
        />
        <div>
          <button onClick={() => {props.saveUser()}}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
};

export default SignUp;