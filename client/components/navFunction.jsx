import React, { Component } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import SignUpLogInPage from './SignUpLogInPage';

export default function(props) {
  const navigate = useNavigate();
  return <SignUpLogInPage navigate={navigate} />;
}