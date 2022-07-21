// Mongoose schema for users
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  favorites: {
    type: Array,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
