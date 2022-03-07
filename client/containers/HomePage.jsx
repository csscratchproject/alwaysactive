import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import SideBarContainer from './SideBarContainer';
import EventsContainer from './EventsContainer';
import { useLocation } from 'react-router-dom';

// function HomePage(props) {
//   return (
//     <div>
//       <SignUpLogInButton />
//       <div id="ContainerParent">
//         <SideBarContainer />
//         <EventsContainer />
//       </div>
//     </div>
//   );
// }

function HomePage(props) {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      {/* <SignUpLogInButton /> */}
      <div id="ContainerParent">
        <SideBarContainer />
        <EventsContainer />
      </div>
    </div>
  );
}

export default HomePage;
