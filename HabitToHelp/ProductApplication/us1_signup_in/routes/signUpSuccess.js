const { Router } = require('express');
const express = require('express');
const router = express.Router();
const passport = require('passport'); //for auth
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//GET routes sign up success page
router.get("/",  (req, res) => res.render('signUpSuccess'));

/*I did seperately routes 
cus we need to do login auth here  as index login post */ 

/* ROUTE WITH NO auth
router.post("/",  (req, res) => {
    const {email, password} = req.body;
    const newSignIn = {
        email,
        password        
    };
    console.log(newSignIn);
    res.status(201).redirect('/dashboard'); //success scenario. 
});*/

router.post('/', (req, res, next) => {
    passport.authenticate('local', {  //using local strategy 
        successRedirect: '/dashboard',
        failureRedirect: '/failedSignIn', //if fail redirect to login page.
        failureFlash: true
    })(req, res, next);
});

module.exports = router;

