const db = require('../models/model');

const findUser = (username) => (
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE username = $1;', [username])
      .then((data) => {
        resolve(data.rows[0]);
      })
      .catch((e) => reject(e));
  })
);

const addUser = (username, password) => (
  new Promise((resolve, reject) => {
    db.query('INSERT INTO users (username, password) VALUES ($1, $2);', [username, password])
      .then(() => resolve(true))
      .catch((e) => reject(e));
  })
);

const authenticate = (user, password) => {
  if (user.password === password) {
    return true;
  }
  return false;
};

const userController = {};

userController.login = (req, res, next) => {
  findUser(req.body.username)
    .then((user) => {
      if (user) {
        if (authenticate(user, req.body.password)) {
          res.locals.result = true;
          return next();
        }
        res.locals.result = false;
        return next();
      }
      res.locals.result = false;
      return next();
    })
    .catch((e) => next(e));
};

userController.signup = (req, res, next) => {
  findUser(req.body.username)
    .then((user) => {
      if (!user) {
        return addUser(req.body.username, req.body.password)
          .then((result) => {
            res.locals.result = result;
            return next();
          })
          .catch((e) => next(e));
      }
      res.locals.result = false;
      return next();
    })
    .catch((e) => next(e));
};

userController.deleteUser = (req, res, next) => {
  db.query(`DELETE FROM users WHERE username = '${req.body.username}' RETURNING *;`)
    .then((result) => {
      if (result.rows[0]) {
        console.log(`sucessfully deleted username - ${result.rows[0].username}`);
        res.locals.deleted = true;
      }
      else res.locals.deleted = false;
      return next();
    })
    .catch((err) => next(err));
};

// rsvp functions and controllers
const rsvpExists = (username, eventId) => (
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM rsvp WHERE username = $1 AND event_id = $2;', [username, eventId])
      .then((data) => resolve(data.rows.length > 0))
      .catch((e) => reject(e));
  })
);

const deleteRsvp = (username, eventId) => (
  new Promise((resolve, reject) => {
    db.query('DELETE FROM rsvp WHERE username = $1 AND event_id = $2;', [username, eventId])
      .then(resolve)
      .catch((e) => reject(e));
  })
);

const insertRsvp = (username, eventId) => (
  new Promise((resolve, reject) => {
    db.query('INSERT INTO rsvp (username, event_id) VALUES ($1, $2);', [username, eventId])
      .then(resolve)
      .catch((e) => reject(e));
  })
);

userController.rsvp = (req, res, next) => {
  rsvpExists(req.body.username, req.body.event_id)
    .then((exists) => {
      if (exists) {
        deleteRsvp(req.body.username, req.body.event_id)
          .then(() => {
            res.locals.result = { rsvp: false };
            return next();
          })
          .catch((e) => next(e));
      } else {
        insertRsvp(req.body.username, req.body.event_id)
          .then(() => {
            res.locals.result = { rsvp: true };
            return next();
          })
          .catch((e) => next(e));
      }
    })
    .catch((e) => next(e));
};

module.exports = userController;
