const { Router } = require('express');
const express = require('express');
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const app = express();

//GET routes welcom page
router.get("/",  (req, res) => res.render('welcome'));




module.exports = router;