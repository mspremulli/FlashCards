const mongoose = require('mongoose');
const CardData = new mongoose.Schema({
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

module.exports = CardData;