const db = require('../models/model');

const eventController = {
  addEvent: (req, res, next) => {
    const sql = 'INSERT INTO events (name, city, state, time, description, username) VALUES ($1, $2, $3, $4, $5, $6);';
    const rawDateTime = new Date(`${req.body.date}T${req.body.time}`);
    const timeStamp = rawDateTime.toISOString();
    db.query(
      sql,
      [
        req.body.name,
        req.body.city,
        req.body.state,
        timeStamp,
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
  getEvents: (req, res, next) => {
    const sql = 'SELECT e.*, COUNT(r._id), CASE WHEN EXISTS (SELECT * FROM rsvp r WHERE r.event_id = e._id AND r.username = $1) THEN TRUE ELSE FALSE END userStatus FROM events e LEFT JOIN rsvp r ON e._id = r.event_id GROUP BY e._id ORDER BY e.time ASC;';
    db.query(
      sql,
      [req.body.username],
      (err, events) => {
        if (err) { return next(err); }
        res.locals.events = events.rows;
        return next();
      },
    );
  },

  filterEvents: (req, res, next) => {
    console.log(req.body)
    const sql = 'SELECT e.*, COUNT(r._id), CASE WHEN EXISTS (SELECT * FROM rsvp r WHERE r.event_id = e._id AND r.username = $1) THEN TRUE ELSE FALSE END userStatus FROM events e LEFT JOIN rsvp r ON e._id = r.event_id WHERE e.city = $2 AND e.state = $3 GROUP BY e._id ORDER BY e.time ASC;';
    db.query(
      sql,
      [
        req.body.username,
        req.body.city,
        req.body.state,
      ],
      (err, events) => {
        if (err) return next(err);
        res.locals.filteredEvents = events.rows;
        return next();
      },
    );
  },
};

module.exports = eventController;
