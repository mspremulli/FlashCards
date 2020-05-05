const express = require('express');
const router = express.Router();
let User = require('../models/user.model.js');

//request to retrieve users
router.get('/', async(req,res,) => {
  try{
    const getUser = await User.find();
    res.json(getUser);
  }
  catch{
    res.json({message:err});
  }
    
     
});

//submit post to add a new user
router.post('/add', async (req, res) => {
    console.log(req.body);

    const newUser = new User({
      username:req.body.username,
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    });

    try{
      const savedPost = await newUser.save();
      res.json(savedPost);
    }

    catch(err){
      res.json({message:err});
    }
});




module.exports = router;