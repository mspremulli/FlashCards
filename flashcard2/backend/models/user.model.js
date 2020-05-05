const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength:3,
        trim: true
    },

    password:{
      type:String,
      required:true,
      minlength:5
    },

    name:{
      type: String,
      required: true,
    },

    email:{
      type: String,
      required: true,
      unique:true
    }
},
    {
     timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;