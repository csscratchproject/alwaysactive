import React from 'react';
import { render } from 'react-dom';

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
