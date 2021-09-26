const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUsers = (req, res) => {
  User.find()
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
  const { name } = req.body;
  const image = req.file ? req.file.filename : '';

  User.create({ name, image })
    .then((createdUser) => res.json(createdUser))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getUsers,
  createUser,
};
