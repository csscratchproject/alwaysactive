import React, { Component } from 'react';
import { render } from 'react-dom';

function SignUp(props) {
  return (
    <div>
      <h1>Log In</h1>
      <div>
        <input
          onChange={(e) => {props.updateUsername(e.target.value)}}
          value={props.username}
          placeholder='Username'
          type='text'
        />
        <input
          onChange={(e) => {props.updatePassword(e.target.value)}}
          value={props.password}
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