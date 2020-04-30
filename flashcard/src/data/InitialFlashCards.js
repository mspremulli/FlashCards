import cardData from './models/cardModel.js';

async function createCard(){

    const Card = mongoose.model('Card', cardData);
    const card = new Card({
        id:1,
        title:'API',
        question:'What is an API?',
        answer:'Application programming interface'
    })
    
    const result = await card.save();
    console.log(result);
}

createCard();