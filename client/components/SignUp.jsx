import React from 'react';

function SignUp(props) {
  return (
    <div>
      {/* <h1>Sign Up</h1> */}
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
        <div>
          <button id='signUpBtn' type="submit" onClick={(e) => {props.saveUser(e)}}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

// function SignUp(props) {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form>
//         <input id='inputBox'
//           onChange={(e) => {props.updateSignUpUsername(e.target.value)}}
//           value={props.signUpUsername}
//           placeholder='Username'
//           type='text'
//         />
//         <input id='inputBox'
//           onChange={(e) => {props.updateSignUpPassword(e.target.value)}}
//           value={props.signUpPassword}
//           placeholder='Password'
//           type='text'
//         />
//         <div>
//           <button id='signUpBtn' onClick={() => {props.saveUser()}}>
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// };

export default SignUp;
