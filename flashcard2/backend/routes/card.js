const express = require('express');
const router = express.Router();
let CardData = require('../models/flashcard.model.js')

router.get('./card',(req,res,next) => {
    CardData.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error',err))
});

router.post('/add', (req, res, next) => {
   const title = req.body.title;
   const question = req.body.question;
   const answer = req.body.answer;
   const hint = req.body.hint;

   const newFlashCard = new CardData({
       title,
       question,
       answer,
       hint,
   });

   newFlashCard.save()
   .then(() => res.json('Card Added'))
   .catch(err => res.status(400).json('Error',err))
   
});


module.exports = router;