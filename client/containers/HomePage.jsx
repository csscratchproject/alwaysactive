import React, { Component } from 'react';
import { render } from 'react-dom';
import SideBarContainer from './SideBarContainer';
import EventsContainer from './EventsContainer';
import SignUpLogInButton from '../components/SignUpLogInButton';


const HomePage = () => {
    return (
        <div>
          <SignUpLogInButton />
          {/* <SideBarContainer />
          <EventsContainer /> */}
        </div>
      );

}

export default HomePage;
