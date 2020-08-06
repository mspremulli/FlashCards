const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    password: {
      type: String,
      required: true,
      minlength: 5
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    date: {
      type: Date,
      default: Date.now
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User;