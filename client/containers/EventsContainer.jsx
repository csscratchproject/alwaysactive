import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import EventBox from '../components/EventBox';

let counter = 0;

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArr: [],
    };
    this.getEvents = this.getEvents.bind(this);
  }

  async getEvents() {
    // check route name in backend
    const response = await fetch('/events');
    const data = await response.json();
    // bottom comments go here
    this.setState({
      eventsArr: data,
    });
    // .then((data) => {
    //   for (let i = 0; i < data.length; i++) {
    //     const dateObj = new Date(data[i].time);
    //     events.push(<EventBox
    //       key={i}
    //       name={data[i].name}
    //       city={data[i].city}
    //       state={data[i].state}
    //       description={data[i].description}
    //       date={dateObj.toLocaleDateString()}
    //       time={dateObj.toLocaleTimeString()}
    //     />);
    //     console.log(events);
    //     //console.log(data);
    //   }
    // })
    // .catch((err) => console.log(err));
  }

  render() {
    const events = [];
    // let counter = 0;
    while (counter < 1) {
      this.getEvents();
      counter += 1;
    }
    // useEffect(() => {
    //   if (isSignedIn === true) navigate('/');
    // }, [this.state.eventsArr]);
    for (let i = 0; i < this.state.eventsArr.length; i++) {
      const dateObj = new Date(this.state.eventsArr[i].time);
      events.push(<EventBox
        key={i}
        name={this.state.eventsArr[i].name}
        city={this.state.eventsArr[i].city}
        state={this.state.eventsArr[i].state}
        description={this.state.eventsArr[i].description}
        date={dateObj.toLocaleDateString()}
        time={dateObj.toLocaleTimeString()}
      />);
    }
    return (
      <div id="EventsContainer">
        {events}
      </div>
    );
  }
}

// function EventsContainer() {
//   const [eventsArr, addEvents] = useState([]);
//   const events = [];

//   const getEvents = () => {
//     // check route name in backend
//     fetch('/events')
//       .then((data) => data.json())
//       //bottom comments go here
//       .then((data) => {
//         console.log(data);
//         console.log('before')
//         console.log(eventsArr);
//         addEvents(data);
//         console.log('after');
//         console.log(eventsArr);`1`
//         for (let i = 0; i < eventsArr.length; i++) {
//           const dateObj = new Date(eventsArr[i].time);
//           events.push(<EventBox
//             key={i}
//             name={eventsArr[i].name}
//             city={eventsArr[i].city}
//             state={eventsArr[i].state}
//             description={eventsArr[i].description}
//             date={dateObj.toLocaleDateString()}
//             time={dateObj.toLocaleTimeString()}
//           />);
//           // console.log()
//           // console.log(events);
//           // console.log(data);
//         }
//       })
//       // .then((data) => {
//       //   for (let i = 0; i < data.length; i++) {
//       //     const dateObj = new Date(data[i].time);
//       //     events.push(<EventBox
//       //       key={i}
//       //       name={data[i].name}
//       //       city={data[i].city}
//       //       state={data[i].state}
//       //       description={data[i].description}
//       //       date={dateObj.toLocaleDateString()}
//       //       time={dateObj.toLocaleTimeString()}
//       //     />);
//       //     console.log(events);
//       //     //console.log(data);
//       //   }
//       // })
//       .catch((err) => console.log(err));
//   };
//   getEvents();
//   return (
//     <div id="EventsContainer">
//       {events}
//     </div>
//   );
// }

export default EventsContainer;

// .then((data) => {
//         console.log(data);
//         console.log('before')
//         console.log(eventsArr);
//         addEvents(data);
//         console.log('after');
//         console.log(eventsArr);`1`
//         for (let i = 0; i < eventsArr.length; i++) {
//           const dateObj = new Date(eventsArr[i].time);
//           events.push(<EventBox
//             key={i}
//             name={eventsArr[i].name}
//             city={eventsArr[i].city}
//             state={eventsArr[i].state}
//             description={eventsArr[i].description}
//             date={dateObj.toLocaleDateString()}
//             time={dateObj.toLocaleTimeString()}
//           />);
//           // console.log()
//           // console.log(events);
//           // console.log(data);
//         }
//       })
