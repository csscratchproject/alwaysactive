/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');

// login
router.post('/login', userController.login, (req, res) => {
  res.status(200).json(res.locals.result);
});
// signin
router.post('/signup', userController.signup, (req, res) => {
  res.status(200).json(res.locals.result);
});
// rsvp
router.post('/rsvp', userController.rsvp, (req, res) => {
  res.status(200).json(res.locals.result);
});

// add event
router.post('/events', eventController.addEvent, (req, res) => {
  res.sendStatus(200);
});
// delete event
router.delete('/events', eventController.deleteEvent, (req, res) => {
  res.sendStatus(200);
});
// get events
router.put('/events', eventController.getEvents, (req, res) => {
  res.status(200).json(res.locals.events);
});
// get filtered events
router.post('/filter', eventController.filterEvents, (req, res) => {
  res.status(200).json(res.locals.filteredEvents);
});

module.exports = router;
