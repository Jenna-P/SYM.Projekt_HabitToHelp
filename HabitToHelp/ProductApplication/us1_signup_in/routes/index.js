const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


//GET routes index page
router.get("/",  (req, res) => res.render('index'));




module.exports = router;