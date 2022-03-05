import React from 'react';
// import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';

function SignUpLogInButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {navigate("/SignUpLogInPage");}}>
        Sign Up/Log In
      </button>
    </div>
  );
};

export default SignUpLogInButton;
