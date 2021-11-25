const { Router } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const app = express();

//User model
//const User = require('../models/User');

//Login page 
//router.get("/login", (req, res) => res.render('login'));

//Register page 
router.get("/register", (req, res) => res.render('register'));

//register handle
router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    //check requires fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
      }
    //check pw match
      if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
      }
    //
      if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
      }
    
      if (errors.length > 0) { //that means vi have issues
        res.render('register', {  //rerender register form
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        //Validation passed
        User.findOne({email: email })
            .then(user => {
                if(user) {
                    //User exists
                    errors.push({msg: "Email is already registered"});
                    res.render('register', {  //rerender register form
                        errors,
                        name,
                        email,
                        password,
                        password2
                      });
                } else { //new user save to DB
                    const newUser = new User({
                        name,
                        email, 
                        password
                    });

                    //hash pw  (use bcrypt)
                    bcrypt.genSalt(10, (err, salt) => {
                     bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        //Set pw to hashed
                       newUser.password = hash;
                       //save users to DB
                       newUser.save()  //when user get saved
                       .then(user => {   //give us promise
                           req.flash('success_msg', 'You are now registered and can log in');
                           res.redirect('/users/login');
                       })
                       .catch(err => console.log(err));

                    });
                });

            }
            });

           
      } 
        

});

 //Login Handle
 router.post('/login', (req, res, next) => {
    passport.authenticate('local', {  //using local strategy 
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',  //fail  : go back to login page
      failureFlash: true
    })(req, res, next);
  });


  //Logout handle

  router.get('/logout', (req, res) => {
    req.logout(); //clears req.session.passport and req.user
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });

module.exports = router;
