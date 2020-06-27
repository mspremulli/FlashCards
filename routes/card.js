const express = require('express');
const router = express.Router();
let CardData = require('../models/flashcard.model.js')

//request to retrieve flashcards
router.get('/', async (req, res) => {
    try{
      const getCard = await CardData.find();
      res.json(getCard);
    }

    catch{
      res.json({message:err});
    }
});

//submit post to add a new flashcard
router.post('/add', async(req, res) => {
  console.log(req.body);

  const newFlashCard = new CardData({
       title: req.body.title,
       question: req.body.question,
       answer: req.body.answer
  });

  try{
    // res.json(await newFlashCard.save()); 
    const savedCard = await newFlashCard.save();
    res.json(savedCard);

  }

  catch{
    res.json({message:err});
  }   
});


module.exports = router;