const express = require('express');
const router = express.Router();
//const port = 3000;
const testObjects = require('../testObjekter');
/*
1. HTML form input text(habit), selecter(good, bad), datePicker??  til DB
2. list div box  ?
3. 
*/

const Habit = require('../models/Habit');

//GET routes dashboard page
router.get('/', (req, res) => { 
    let habit_list = {testObjects} 
    res.render('dashboard', {habit_list: testObjects});
    //req.user til at vise username
    //find user and match id and get habits from DB
});

router.post('/', (req, res) => { 
    const {habitName, habitDescription, category, frequency, date, userID} = req.body;
//create new habit
const newHabit = new Habit({
    habitName,
    habitDescription,
    category,
    frequency,
    date,
    userId: req.user._id

});
//save to DB
newHabit.save();
});
    
//after login find all with same userID in mongoose
//and get habit list, username from DB


/* router.post   (form action  : save habit data)
when habit added (button submit), get there id 
and save data with that */

//router.post

/*
This is model : const newHabit = new Habit({
habit: req.body.habitInput,
good: get chosen value from user(browser) (dnt know syntax),
userID: req.user._id 

});
*/


module.exports = router;