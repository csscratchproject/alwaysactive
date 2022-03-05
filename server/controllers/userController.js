const path = require('path');
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

const userController = {
};

userController.logIn = (req, res, next) => {
  findUser(req.body.username)
    .then((user) => {
      if (!user) {
        return addUser(req.body.username, req.body.password)
          .then((result) => {
            res.locals.result = { successful: result };
            return next();
          })
          .catch((e) => next(e));
      } if (authenticate(user, req.body.password)) {
        res.locals.result = { successful: true };
        return next();
      }
      res.locals.result = { successful: false };
      return next();
    })
    .catch((e) => next(e));
};

userController.register = (req, res, next) => {

};

module.exports = userController;
