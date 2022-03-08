import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import EventForm from './EventForm';

function CreateEventButton(props) {
  return (
    <div id='createBtnContainer'>
      <button id="createBtn" onClick={() => {props.setForm(true)}}>
        Create Your Own Event
      </button>
    </div>
  );
}

export default CreateEventButton;
