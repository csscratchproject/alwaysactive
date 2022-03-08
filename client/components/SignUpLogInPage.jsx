import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import HomePage from '../containers/HomePage';
import { useLocation } from 'react-router-dom';

function SignUpLogInPage(props) {
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [logInUsername, setLogInUsername] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { state } = useLocation();

  const navigate = useNavigate();

  const updateSignUpUsername = (input) => {
    setSignUpUsername(input);
  };

  const updateSignUpPassword = (input) => {
    setSignUpPassword(input);
  };

  const updateLogInUsername = (input) => {
    setLogInUsername(input);
  };

  const updateLogInPassword = (input) => {
    setLogInPassword(input);
  };

  const saveUser = () => {
    const username = signUpUsername;
    const password = signUpPassword;
    const method = 'POST';
    fetch('/signup', {
      method,
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data === true) {
          setSignUpUsername('');
          setSignUpPassword('');
          setIsSignedIn(true);
          navigate('/HomePage', { state: username });
        } else {
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

  return (
    <div id='modalContainer'>
      <div id="modal">
        <div><SignUp signUpUsername={signUpUsername} signUpPassword={signUpPassword} updateSignUpUsername={updateSignUpUsername} updateSignUpPassword={updateSignUpPassword} saveUser={saveUser} /></div>
        <div><LogIn logInUsername={logInUsername} logInPassword={logInPassword} updateLogInUsername={updateLogInUsername} updateLogInPassword={updateLogInPassword} logIn={logIn} /></div>
      </div>
    </div>
  );
}

export default SignUpLogInPage;
