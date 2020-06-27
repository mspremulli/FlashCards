const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cardData = new Schema({
  
    title:{
        type:String,
        required:true,
        minlength:2
    },
    question:{
        type:String
    },
    answer:{
        type:String
    }

});

const Card = mongoose.model('Card', cardData)
module.exports = Card;