import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUp from './SignUp';
import SayHi from './SayHi';
import HomePage from '../containers/HomePage';

// import LogIn from './LogIn';
// import navigate from './navFunction';

// class SignUpLogInPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signUpUsername: '',
//       signUpPassword: '',
//       logInUsername: '',
//       logInPassword: '',
//       isSignedIn: false,
//     };

//     this.updateSignUpUsername = this.updateSignUpUsername.bind(this);
//     this.updateSignUpPassword = this.updateSignUpPassword.bind(this);
//     this.updateLogInUsername = this.updateLogInUsername.bind(this);
//     this.updateLogInPassword = this.updateLogInPassword.bind(this);
//     this.saveUser = this.saveUser.bind(this);
//     this.logIn = this.logIn.bind(this);
//   }

//   updateSignUpUsername(input) {
//     this.setState({
//       signUpUsername: input
//     });
//   }

//   updateSignUpPassword(input) {
//     this.setState({
//       signUpPassword: input
//     });
//   }

//   updateLogInUsername(input) {
//     this.setState({
//       logInUsername: input
//     });
//   }

//   updateLogInPassword(input) {
//     this.setState({
//       logInPassword: input
//     });
//   }

//   saveUser() {
//     const username = this.state.signUpUsername;
//     const password = this.state.signUpPassword;
//     const method = 'POST';
//     // check route name on backend for /signup
//     fetch('/signup', {
//       method,
//       body: JSON.stringify({ username: username, password: password }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(data => data.json())
//       .then(data => {
//         if (data === true) this.setState({signUpUsername: '', signUpPassword: '', isSignedIn: true});
//         else {
//           this.setState({signUpUsername: '', signUpPassword: ''});
//         }
//       })
//       .catch((err) => console.log(err));
//   }

//   logIn() {
//     const username = this.state.logInUsername;
//     const password = this.state.logInPassword;
//     const method = 'POST';
//     // check route name on backend for /login
//     fetch('/login', {
//       method,
//       body: JSON.stringify({ username: username, password: password }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(data => data.json())
//       .then(data => {
//         if (data === true) this.setState({logInUsername: '', logInPassword: '', isSignedIn: true});
//         // console.log(data)
//         else {
//           this.setState({logInUsername: '', logInPassword: ''});
//         }
//       })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     // const navigate = useNavigate();
//     // const { isSignedIn } = this.state.isSignedIn;
//     // const { navigate } = this.props.navigate;
//     return (
//       // <div>
//       //   {(this.state.isSignedIn === true) ? navigate('/') : navigate('/SignUpLogInPage')}
//       // </div>
//       <SignUp />
//     );
//   }
// }

const SignUpLogInPage = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     signUpUsername: '',
  //     signUpPassword: '',
  //     logInUsername: '',
  //     logInPassword: '',
  //     isSignedIn: false,
  //   };

  //   this.updateSignUpUsername = this.updateSignUpUsername.bind(this);
  //   this.updateSignUpPassword = this.updateSignUpPassword.bind(this);
  //   this.updateLogInUsername = this.updateLogInUsername.bind(this);
  //   this.updateLogInPassword = this.updateLogInPassword.bind(this);
  //   this.saveUser = this.saveUser.bind(this);
  //   this.logIn = this.logIn.bind(this);
  // }

  const [ signUpUsername, setSignUpUsername ] = useState('');
  const [ signUpPassword, setSignUpPassword ] = useState('');
  const [ logInUsername, setLogInUsername ] = useState('');
  const [ logInPassword, setLogInPassword ] = useState('');
  const [ isSignedIn, setIsSignedIn ] = useState(true);


  const updateSignUpUsername = (input) => {
    setSignUpUsername(signUpUsername = input);
  }

  const updateSignUpPassword = (input) => {
    setSignUpPassword(signUpPassword = input);
  }

  const updateLogInUsername = (input) => {
    setLogInUsername(logInUsername = input);
  }

  const updateLogInPassword = (input) => {
    setLogInPassword(logInPassword = input);
  }

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
      .then(data => data.json())
      .then(data => {
        // if (data === true) this.setState({signUpUsername: '', signUpPassword: '', isSignedIn: true});
        if (data === true) {
          setIsSignedIn(isSignedIn = true);
          setSignUpUsername(signUpUsername = '');
          setSignUpPassword(signUpPassword = '');
        } 
        else {
          // this.setState({signUpUsername: '', signUpPassword: ''});
          setSignUpUsername(signUpUsername = '');
          setSignUpPassword(signUpPassword = '');
        }
      })
      .catch((err) => console.log(err));
  }

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
      .then(data => data.json())
      .then(data => {
        // if (data === true) this.setState({logInUsername: '', logInPassword: '', isSignedIn: true});
        if (data === true) {
          setLogInUsername(logInUsername = '');
          setLogInPassword(logInPassword = '');
          setIsSignedIn(isSignedIn = true);
        }
        // console.log(data)
        else {
          // this.setState({logInUsername: '', logInPassword: ''});
          setLogInUsername(signUpUsername = '');
          setLogInPassword(logInPassword = '');
        }
      })
      .catch((err) => console.log(err));
   }

  // render() {
    // const navigate = useNavigate();
    // const { isSignedIn } = this.state.isSignedIn;
    // const { navigate } = this.props.navigate;
    const navigate = useNavigate();

    useEffect(() => {
      if (isSignedIn === true) navigate('/SayHi');
    }, [isSignedIn])

    return (
      <div>
        {/* {(isSignedIn === true) ? <div><HomePage /></div> : <div><SignUp /></div>} */}
         <div><SignUp /></div>
      </div>
    );

    // return (
    //   <div>
    //     {(isSignedIn === true) ? navigate('/') : <div><SignUp /></div>}
    //   </div>
    // );

}


export default SignUpLogInPage;