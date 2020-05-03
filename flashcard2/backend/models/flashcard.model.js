const mongoose = require('mongoose');
const cardData = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    question:{
        type:String
    },
    answer:{
        type:String
    },
    hint:{
        type:String
    },

});

const Card = mongoose.model('Card', cardData)
module.exports = Card;