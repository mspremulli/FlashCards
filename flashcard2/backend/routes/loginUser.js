const express = require('express');
const router = express.Router();
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const auth = require('../middlewares/authUser.js');
let User = require('../models/user.model.js');





//request to login and authenticate a user
router.post(
  '/', 
  //validate data
  [
    check(
      'email',
      'please incluse valid email'
    ).isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
    
    
  
    const{email, password} = req.body;
    
    try{
      //see if user exists. send error if they do not exist
      let user = await User.findOne({email:email});
      if(!user){
        res
        .status(400)
        .json({errors:[{msg:'email is not in database'}] });//make message more vauge later for better security
      }

      //check if the entered password matches the encrypted password
      const isMatch = await bcrpyt.compare(password, user.password);
      if(!isMatch){
        res
        .status(400)
        .json({errors:[{msg:'password was incorrect'}] });//make message more vauge later for better security
      }

      //return jsonwebtoken
      const payload = {
        user:{
          id:user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {expiresIn: 360000 },//change to 3600 for 1 hour later
        (err, token) => {
          if(err) throw err;
          res.json({ token });
        }
      );

    } 
    catch(err){
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
);