import React from 'react';
import CreateEventButton from '../components/CreateEventButton';
import EventForm from '../components/EventForm';

function SideBarContainer(props) {
  return (
    <div id="SideBarContainer">
      <div id="searchBox">
        <input id="citySearch" type="text" placeholder="city" />
        <input id="stateSearch" type="text" placeholder="state" />
        <button id="searchBtn" onClick={() => {props.getFilteredEvents(document.getElementById('citySearch').value, document.getElementById('stateSearch').value);}}>search</button>
      </div>
      {props.formOpened === false && <CreateEventButton setForm={props.setForm} />}
      {props.formOpened && <EventForm username={props.username} setForm={props.setForm} getEvents={props.getEvents} />}

    </div>
  );
}

export default SideBarContainer;
