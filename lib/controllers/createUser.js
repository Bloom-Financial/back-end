const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
//////create a user
  .post('/user', (req, res, next) => {
    User
      .insert(req.body)
      .then(user => res.send(user))
      .catch(next);
  })
  .get('/user/:id', (req, res, next) => {
    User
      .findByusername(req.params.id)
      .then(user => res.send(user))
      .catch(next);
  });
