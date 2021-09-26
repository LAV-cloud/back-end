const user = require('../app/controllers/users');
const auth = require('../app/controllers/auth');
const upload = require('../app/middleware/upload');
const authMiddleWare = require('../app/middleware/auth');
const express = require('express');

module.exports = (app) => {
  app.options('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    res.sendStatus(200);
  });

  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  app.post('/signin', auth.signIn);
  app.get('/users', authMiddleWare, user.getUsers);

  // app.use('/images', express.static('uploads'));
  // app.post('/user', upload.single('image'), user.createUser);
  // app.get('/user', user.getUsers);
};
