const express = require('express');
const router = express.Router();
const port = 3000;
const testObjects = require('../testObjekter');

//GET routes dashboard page
router.get('/', (req, res) => { 
    let habit_list = {testObjects} 
    res.render('dashboard', {habit_list: testObjects});
});

    
//after login find all with same userID in mongoose
//and get habit list, username from DB


/* router.post   (form action  : save habit data)
when habit added (button submit), get there id 
and save data with that */

router.post

/*
This is model : const newHabit = new Habit({
habit: req.body.habitInput,
good: get chosen value from user(browser) (dnt know syntax),
userID: req.user._id 

});
*/


module.exports = router;