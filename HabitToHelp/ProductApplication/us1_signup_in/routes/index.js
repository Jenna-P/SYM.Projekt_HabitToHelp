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
    let errors = [];
     //check requires fields
     if (!name || !email || !password || !password_confirm) {
        errors.push({ msg: 'Please enter all fields' });
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
        res.render('register', {  //rerender register form
          errors,
          name,
          email,
          password,
          password_confirm
        });
      } else {
          //res.send("registered"); //should render to login page 
      
    //creat new user 
    const newUser = {
        username,
        name,
        email,
        password,
        password_confirm
    };
     console.log(newUser);
    res.status(201).send(newUser);

}

})

module.exports = router;