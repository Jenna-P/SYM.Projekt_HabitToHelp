const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const creatErrors = require('http-errors');

const app = express();

//GET routes welcom page
router.get("/",  (req, res) => res.render('welcome'));

// //GET routes dashboard page
// router.get("/dashboard", ensureAuthenticated, (req, res) => 
// res.render('dashboard', {
//     name: req.user.name
// }));

router.post("/signup", (req, res, next) => {
    const {username, name, email, password, password_confirm} = req.body;

    if (!name || !email || !password || !password_confirm) {
        return next(creatErrors(422, 'Validation Error'));
      }
      if (password != password_confirm) {
        return next(creatErrors(422, 'Validation Error'));
      }
      //check pw length
      if (password.length < 6) {
        return next(creatErrors(422, 'Validation Error'));
    }
      


    //creat new user 
    const newUser = {
        username,
        name,
        email,
        password,
        password_confirm
    };

    res.status(201).send(newUser);



})

module.exports = router;