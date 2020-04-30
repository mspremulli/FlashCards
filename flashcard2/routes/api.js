const express = require('express');
const router = express.Router();
const CardData = require('../models/flashcard.js')

router.get('./card',(req,res,next) => {
    CardData.find({}, 'action')
      .then(data => res.json(data))
      .catch(next)
});

router.post('/card', (req, res, next) => {
    if(req.body.action){
        CardData.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }else {
        res.json({
        error: "The input field is empty"
        })
    }
});

router.delete('/card/:id', (req, res, next) => {
    CardData.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})


module.exports = router;