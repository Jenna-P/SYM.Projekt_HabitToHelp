const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//password encrypt
const bcrypt = require('bcryptjs');

//import model
const User = require('../models/User');

//GET routes sign up page
router.get("/",  (req, res) => res.render('signup'));

router.post("/", (req, res, next) => {
    const {username, name, email, password, password_confirm} = req.body;
    let errors = [];
     //check requires fields
     if (!name || !email || !password || !password_confirm) {
        errors.push({ msg: 'Please enter all fields' });
        
        //res.send('err');  //just to check that is working
      }
    //check pw match
      if (password != password_confirm) {
        errors.push({ msg: 'Passwords do not match' });
        
      }
    //check pw length
      if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
       
      }
      if (errors.length > 0) { //that means vi have issues
        res.render('signup', {  //rerender signup form again with err msg ({ejs})
          errors,
          name,
          username,
          email,
          password,
          password_confirm
          
        });
        console.log('err');
       
      } else {
        //create new user for db
        const newUser = new User({
            username,
            name,
            email,
            password,
      });

      //hash pw (use bcrypt)
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
           if(err) throw err;
           //Set pw to hashed
          newUser.password = hash;
          //save users to DB
          newUser.save() //when user get saved db
          .then(user => { //give us promise
             res.redirect('/signUpSuccess');
          })
          .catch(err => console.log(err));
        });
      });
    }
})

module.exports = router;