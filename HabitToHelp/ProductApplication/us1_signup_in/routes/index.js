const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//GET routes index page
router.get("/",  (req, res) => res.render('index'));

//GET routes dashboard page
router.get("/dashboard",  (req, res) => res.render('dashboard'));

//POST success redirect to dashboard or fallback to index
router.post("/dashboard",  (req, res) => {
    const {email, password} = req.body;
    const newSignIn = {
        email,
        password        
    };
    console.log(newSignIn);
    res.status(201).render('dashboard'); //success scenario. 
});

module.exports = router;