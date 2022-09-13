import React from 'react';

function SignUp(props) {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input
          id="inputBox"
          onChange={(e) => { props.updateSignUpUsername(e.target.value); }}
          value={props.signUpUsername}
          placeholder="Username"
          type="text"
          required
        />
        <input
          id="inputBox"
          onChange={(e) => { props.updateSignUpPassword(e.target.value); }}
          value={props.signUpPassword}
          placeholder="Password"
          type="text"
          required
        />
        <button id="signUpBtn" onClick={() => { props.saveUser() }}>
        {/* <button id="signUpBtn" type="submit" onClick={() => { props.saveUser(); console.log('trying to sign up') }}> */}
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
