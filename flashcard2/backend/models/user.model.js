const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
      type: String,
      required: true,
    },

    password:{
      type: String,
      required: true,
      minlength: 5
    },

    email:{
      type: String,
      required: true,
      unique: true
    },

    date:{
      type: Date,
      default: Date.now
    }
}
)

const User = mongoose.model('User', userSchema);

module.exports = User;