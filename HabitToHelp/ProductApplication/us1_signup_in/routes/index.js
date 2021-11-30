const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//GET routes index page
router.get("/",  (req, res) => res.render('index'));

//POST success redirect to dashboard or fallback to index
router.post("/",  (req, res) => {
    const {email, password} = req.body;
    const newSignIn = {
        email,
        password        
    };
    console.log(newSignIn);
//  res.status(201).send(newSignIn); //should render to welcome/login page with success msg
    res.status(201).render('signUpSuccess');
});

module.exports = router;