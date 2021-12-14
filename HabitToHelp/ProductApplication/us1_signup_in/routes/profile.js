const { Router } = require('express');
const express = require('express');
const router = express.Router();


let user_signedin = null;

//Refrence MongoDB schema from models folder
const User = require('../models/User');

//GET routes
router.  get('/', async (req, res) => { 
    //find user and match id and get information
    user_signedin = await User.find({userID : req.user._id});
    //req.user til at vise username
    res.render('profilePage', {
        username: req.user.username,
    });
});


function getProfileImage() {

}