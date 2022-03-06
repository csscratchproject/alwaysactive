import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import HomePage from '../containers/HomePage';
import { useLocation } from 'react-router-dom';

// const SignUpLogInPage = () =>{
function SignUpLogInPage(props) {
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [logInUsername, setLogInUsername] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  // const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignUpUsername = (input) => {
    setSignUpUsername(signUpUsername = input);
  }

  const updateSignUpPassword = (input) => {
    setSignUpPassword(signUpPassword = input);
  };

  const updateLogInUsername = (input) => {
    setLogInUsername(logInUsername = input);
  };

  const updateLogInPassword = (input) => {
    setLogInPassword(logInPassword = input);
  };

  const saveUser = () => {
    const username = signUpUsername;
    const password = signUpPassword;
    const method = 'POST';
    // check route name on backend for /signup
    fetch('/signup', {
      method,
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data === true) {
          setIsSignedIn(isSignedIn = true);
          setSignUpUsername(signUpUsername = '');
          setSignUpPassword(signUpPassword = '');
        } 
        else {
          setSignUpUsername(signUpUsername = '');
          setSignUpPassword(signUpPassword = '');
        }
      })
      .catch((err) => console.log(err));
  };

  const logIn = () => {
    const username = logInUsername;
    const password = logInPassword;
    const method = 'POST';
    // check route name on backend for /login 
    fetch('/login', {
      method,
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data === true) {
          setLogInUsername(logInUsername = '');
          setLogInPassword(logInPassword = '');
          setIsSignedIn(isSignedIn = true);
        } else {
          setLogInUsername(signUpUsername = '');
          setLogInPassword(logInPassword = '');
        }
      })
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isSignedIn === true) navigate('/');
  // }, [isSignedIn]);
  const { state } = useLocation();
  console.log('the state:');
  console.log(state);
  console.log(state);
  return (
    <div>
      <div><SignUp /></div>
      <div><LogIn /></div>
    </div>
  );
}

export default SignUpLogInPage;
