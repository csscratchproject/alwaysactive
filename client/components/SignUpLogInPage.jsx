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
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { state } = useLocation();

  const navigate = useNavigate();

  // const updateSignUpUsername = (input) => {
  //   setSignUpUsername(signUpUsername = input);
  // };
  const updateSignUpUsername = (input) => {
    setSignUpUsername(input);
  };

  // const updateSignUpPassword = (input) => {
  //   setSignUpPassword(signUpPassword = input);
  // };

  const updateSignUpPassword = (input) => {
    setSignUpPassword(input);
  };

  // const updateLogInUsername = (input) => {
  //   setLogInUsername(logInUsername = input);
  // };

  const updateLogInUsername = (input) => {
    setLogInUsername(input);
  };

  // const updateLogInPassword = (input) => {
  //   setLogInPassword(logInPassword = input);
  // };

  const updateLogInPassword = (input) => {
    setLogInPassword(input);
  };

  const saveUser = () => {
    const username = signUpUsername;
    const password = signUpPassword;
    const method = 'POST';
    // navigate('/HomePage', { state: username });
    // check route name on backend for /signup
    fetch('/signup', {
      method,
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data === true) {
          // setSignUpUsername(signUpUsername = '');
          // setSignUpPassword(signUpPassword = '');
          setSignUpUsername('');
          setSignUpPassword('');
          setIsSignedIn(true);
          navigate('/HomePage', { state: username });
        } else {
          // setSignUpUsername(signUpUsername = '');
          // setSignUpPassword(signUpPassword = '');
          setSignUpUsername('');
          setSignUpPassword('');
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
          setLogInUsername('');
          setLogInPassword('');
          setIsSignedIn(true);
          navigate('/HomePage', { state: username });
        } else {
          setLogInUsername('');
          setLogInPassword('');
        }
      })
      .catch((err) => console.log(err));
  };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isSignedIn === true) navigate('/');
  // }, [isSignedIn]);

  return (
    <div>
      <div><SignUp signUpUsername={signUpUsername} signUpPassword={signUpPassword} updateSignUpUsername={updateSignUpUsername} updateSignUpPassword={updateSignUpPassword} saveUser={saveUser} /></div>
      <div><LogIn logInUsername={logInUsername} logInPassword={logInPassword} updateLogInUsername={updateLogInUsername} updateLogInPassword={updateLogInPassword} logIn={logIn} /></div>
    </div>
  );
}

export default SignUpLogInPage;
