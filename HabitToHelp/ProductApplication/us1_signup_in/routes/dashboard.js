const express = require('express');
const router = express.Router();

//GET routes dashboard page
router.get("/", (req, res) => res.render('dashboard'));

//after login find all with same userID in mongoose
//and get habit list, username from DB


/* router.post   (form action  : save habit data)
when habit added (button submit), get there id 
and save data with that 

This is model : const newHabit = new Habit({
habit: req.body.habitInput,
good: get chosen value from user(browser) (dnt know syntax),
userID: req.user._id 

});
*/


module.exports = router;