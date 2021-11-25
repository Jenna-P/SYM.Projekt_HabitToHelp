const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


const app = express();

//GET routes welcom page
router.get("/",  (req, res) => res.render('welcome'));

// //GET routes dashboard page
// router.get("/dashboard", ensureAuthenticated, (req, res) => 
// res.render('dashboard', {
//     name: req.user.name
// }));


module.exports = router;