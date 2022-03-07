/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');

const router = express.Router();
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');

// Log in
router.post('/login', userController.login, (req, res) => {
  res.status(200).json(res.locals.result);
});
router.post('/signup', userController.signup, (req, res) => {
  res.status(200).json(res.locals.result);
});

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
router.get('/events', eventController.getEvents, (req, res) => {
  res.status(200).json(res.locals.events);
});

module.exports = router;
