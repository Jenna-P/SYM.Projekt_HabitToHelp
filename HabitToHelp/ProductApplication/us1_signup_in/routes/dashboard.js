const express = require('express');
const router = express.Router();
//const port = 3000;
const testObjects = require('../testObjekter');
/*
2. list div box  ?
3. google : EJS change div box style to red if category value is bad

*/


const Habit = require('../models/Habit');

//GET routes dashboard page
router.  get('/', async (req, res) => { 
    //find user and match id and get habits from DB
    let habit_list = await Habit.find({userID : req.user._id});
    res.cookie('habits', habit_list);
    console.log(habit_list);
    //req.user til at vise username
    res.render('dashboard', {
        habits: habit_list,
        username: req.user.username,
    });
    
    
});

router.post('/', (req, res) => { 
    const {habitName, habitDescription, category, frequency, startDate} = req.body;
//create new habit
const newHabit = new Habit({
    habitName,
    habitDescription,
    category,
    frequency,
    startDate,
    userID: req.user._id

});
//save to DB
newHabit.save();
});
    
//after login find all with same userID in mongoose






module.exports = router;