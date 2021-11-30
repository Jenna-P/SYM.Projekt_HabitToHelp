const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const app = express();

//GET routes sign up page
router.get("/",  (req, res) => res.render('sign-up'));


router.post("/", (req, res, next) => {
    const {username, name, email, password, password_confirm} = req.body;
    let errors = [];
     //check requires fields
     if (!name || !email || !password || !password_confirm) {
        errors.push({ msg: 'Please enter all fields' });
        res.send('err');  //just to check that is working
        
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
        res.render('sign-up', {  //rerender signup form again with err msg ({ejs})
          errors,
          name,
          username,
          email,
          password,
          password_confirm
          
        });
        console.log('err');
       
      } else {
           
      
    //creat new user 
    const newUser = {
        username,
        name,
        email,
        password
        
    };
     console.log(newUser);
    res.status(201).send(newUser); //should render to welcome/login page with success msg
    

}

})

module.exports = router;