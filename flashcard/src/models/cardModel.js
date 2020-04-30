
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

exports.cardModel = cardModel;

// module.exports = mongoose.model('cardModel', cardData);