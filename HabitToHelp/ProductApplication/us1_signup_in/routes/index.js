const { Router } = require('express');
const express = require('express');
const router = express.Router();
const passport = require('passport'); //for auth
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//GET routes index page
router.get("/",  (req, res) => res.render('index'));

//POST success redirect to dashboard or fallback to index
//Login handle 
router.post('/', (req, res, next) => {
    passport.authenticate('local', {  //using local strategy 
      successRedirect: '/dashboard',
      failureRedirect: '/',  //fail  : go back to login page
      failureFlash: true
    })(req, res, next);    
});

module.exports = router;