import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import EventForm from './EventForm';

function CreateEventButton(props) {
  return (
    <div>
      <button onClick={() => {props.setForm(true)}}>
        Create Your Own Event
      </button>
    </div>
  );
}

export default CreateEventButton;
