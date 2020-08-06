const express = require('express');
const router = express.Router();
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const auth = require('../middlewares/authUser.js');
let User = require('../models/User.js');

//@route  POST /users
//@desc  register a user
//@access Public
router.post(
  '/', 
  //validate data
  // [
  //   check(
  //     'email',
  //     'please incluse valid email'
  //   ).isEmail(),
  //   check(
  //     'password',
  //     'please enter a password with 6 or more characters'
  //   ).exists(),
  // ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //   return res.status(400).json({errors:errors.array()});
    // }
    
    
    try{
      let userData = {
        email: req.body.email,
        password: req.body.password
      };

      console.log(userData);
      // let {email, password} = userData;
      // // see if user exists. send error if they do not exist
      // let user = await User.findOne({email: email});
      // if(!user){
      //   //make message more vauge later for better security
      //   res.status(400).json({errors:[{msg:'email is not in database'}] });
      // }
      
      // const salt = await bcrpyt.genSalt(10);
      // password = await bcrpyt.hash(password, salt);

      const newUser = await User.create(userData);
      console.log('newuser:', newUser);
      return res.json(newUser);

    } 
    catch(err){
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
);

module.exports = router;