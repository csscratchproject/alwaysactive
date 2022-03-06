import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import CreateEventButton from '../components/CreateEventButton';
import EventForm from '../components/EventForm';
import SignUpLogInButton from '../components/SignUpLogInButton';
import SignUpLogInPage from '../components/SignUpLogInPage';

// function SideBarContainer(props) {
//   const [formOpened, setForm] = useState(false);
//   return (
//     <div id="SideBarContainer">
//       {formOpened === false && <CreateEventButton setForm={setForm} />}
//       {formOpened && <EventForm setForm={setForm} />}
//     </div>
//   );
// }

function SideBarContainer(props) {
  const [isSignedIn, setSignedIn] = useState(false);
  const [formOpened, setForm] = useState(false);
  return (
    <div id="SideBarContainer">
      {isSignedIn === false && <SignUpLogInButton setSignedIn={setSignedIn} />}
      {isSignedIn === true && formOpened === false && <CreateEventButton setForm={setForm} />}
      {isSignedIn === true && formOpened && <EventForm setForm={setForm} />}
    </div>
  );
}

export default SideBarContainer;
