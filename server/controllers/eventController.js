/* eslint-disable linebreak-style */
const path = require('path');
const db = require('../models/model');

const eventController = {
  addEvent: (req, res, next) => {
    const sql = 'INSERT INTO events (name, city, state, time, description, username) VALUES ($1, $2, $3, $4, $5, $6);';
    db.query(
      sql,
      [
        req.body.name,
        req.body.city,
        req.body.state,
        req.body.time,
        req.body.description,
        req.body.username,
      ],
      (err) => {
        if (err) return next(err);
        return next();
      },
    );
  },
  deleteEvent: (req, res, next) => {
    const sql = 'DELETE FROM events WHERE _id = $1';
    db.query(
      sql,
      [req.body.event_id],
      (err) => {
        if (err) { return next(err); }
        return next();
      },
    );
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
