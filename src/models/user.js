const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', userSchema);
