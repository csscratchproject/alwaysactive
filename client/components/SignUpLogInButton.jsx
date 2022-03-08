import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SignUpLogInPage from './SignUpLogInPage';

function SignUpLogInButton(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log('here:');
  console.log(props);
  const func = 7;
  return (
    <div>
      <button onClick={() => {navigate("/SignUpLogInPage", {state: func});}}>
        Sign Up/Log In
      </button>
    </div>
  );
};


export default SignUpLogInButton;
