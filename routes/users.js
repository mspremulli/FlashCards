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
  // validate data
  [
    check(
      'email',
      'please incluse valid email'
    ).isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).exists(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength(5),
  ],
  async (req, res) => {
    // console.log('registering started...');
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
        
    try{
      let userData = {
        email: req.body.email,
        password: req.body.password
      };

      console.log(userData);
      let {email, password} = userData;
      // see if user exists. send error if they do exist
      let user = await User.findOne({email: email});
      if(user){
        //make message more vauge later for better security
        return res.status(400).json({errors:[{msg:'email is already in use'}] });
      }
      
      const salt = await bcrpyt.genSalt(10);
      password = await bcrpyt.hash(password, salt);

      const newUser = await User.create(userData);
      console.log('newuser:', newUser);
      return res.json(newUser);

    } 
    catch(err){
      console.error('register error', err.message);
      res.status(500).send('Server Error');
    }

  }
);

// @route		PUT api/users
// @desc		login route
// @access	public
router.put(
  "/login",
//validate here later
  async (req, res) => {
    //check validation errors later
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const user = await User.findOne({email: req.body.email});

      if (isEmpty(user)) {
        //fix error messages later to improve security
        return res.status(400).json({errors: {message: "login not in database"} });
      }

      const passwordsMatch = await bcrypt.compare(req.body.password, user.password);

      
      if (!passwordsMatch) {
        //fix error messages later to improve security
        return res.status(400).json({ errors: { message: "wrong password" } });
      }

      User.findByIdAndUpdate(user.id);

      const payload = {
        id: user._id,
        email: user.email,
      };

      const token = jwt.sign(payload, config.jwtSecret, {});

      res.json(token);
    } 
    catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
  
);



module.exports = router;