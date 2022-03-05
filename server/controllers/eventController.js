/* eslint-disable linebreak-style */
const db = require('../models/model.js');
const path = require('path');

const eventController = {
  addEvent: (req, res, next) => {
    const sql = `INSERT INTO events (${req.body});`;
    req.query(sql, (err) => {
      if (err) return next(err);
      res.status(200).send();
      return next();
    });
  },
  deleteEvent: (req, res, next) => {
    const sql = `DELETE FROM events WHERE ${req.body.event_id};`;
    db.query(sql, (err) => {
      if (err) return next(err);
      res.status(200).send();
      return next();
    });
  },
//   updateEvent: (req, res, next) => {
//     const sql = `UPDATE events SET ${req.body.new} WHERE ${req.body.event_id};`;
//     db.query(sql, (err) => {
//       if (err) return next(err);
//       res.status(200).send();
//       return next();
//     });
//   },
};

module.exports = eventController;
