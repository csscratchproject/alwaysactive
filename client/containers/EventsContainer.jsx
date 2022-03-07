import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import EventBox from '../components/EventBox';

function EventsContainer() {
  const [eventsArr, addEvents] = useState([]);
  
  const getEvents = () => {
    //check route name in backend
    fetch('/events')
      .then((data) => data.json())
      .then((data) => {
        addEvents(data);
      })
      .catch((err) => console.log(err));
  };

  // getEvents();
  let events = [];
  for (let i = 0; i < 3; i++) {
    events.push(<EventBox
      key={i}
      // name={eventsArr[i].name}
      // city={eventsArr[i].city}
      // state={eventsArr[i].state}
      // description={eventsArr[i].description}
      // date={eventsArr[i].date}
      // time={eventsArr[i].time}
      // number={eventsArr[i].number}
    />);
  }
  return (
    <div id="EventsContainer">
      {/* <h1>Events will be displayed in here</h1> */}
      {/* {arr} */}
      {events}
    </div>

  );
}

export default EventsContainer;
