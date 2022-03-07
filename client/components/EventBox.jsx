import React, { Component } from 'react';
import { render } from 'react-dom';

const EventBox = (props) => {
  
  return (
    <div id='EventBox'>
      <h1>{props.name}</h1> 
      <h1>{props.city}</h1> 
      <h1>{props.state}</h1> 
      <h1>{props.description}</h1> 
      <h1>{props.date}</h1> 
      <h1>{props.time}</h1> 
    </div>
  );
};

export default EventBox;
