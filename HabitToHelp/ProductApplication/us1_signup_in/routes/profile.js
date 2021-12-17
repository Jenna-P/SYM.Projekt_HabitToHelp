const express = require('express');
const router = express.Router();
//Refrence MongoDB schema from models folder
//const User = require('../models/User');

//GET routes profile page
router.get('/', async (req, res) => { 
    res.render('profile', {
        username: req.user.username,
        name: req.user.name,
        email: req.user.email,
    });
});

module.exports = router;