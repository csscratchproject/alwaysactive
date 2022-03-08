import React from 'react';
import { render } from 'react-dom';
import EventBox from '../components/EventBox';

let counter = 0;

const EventsContainer = (props) => {
  return (
    <div id="EventsContainer">
      {props.events}
    </div>
  );
}

export default EventsContainer;
