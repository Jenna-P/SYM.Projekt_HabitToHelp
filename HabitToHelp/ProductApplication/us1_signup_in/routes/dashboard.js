const express = require('express');
const router = express.Router();
const testObjects = require('../testObjekter');
const Habit = require('../models/Habit');

//GET routes dashboard page
router.get('/', async (req, res) => { 
    //find user and match id and get habits from DB
    let habit_list = await Habit.find({userID : req.user._id});
    //console.log(habit_list);
    //req.user til at vise username
    res.render('dashboard', {
        habits: habit_list,
        username: req.user.username,
        name: req.user.name,
    });
});

//get value by endepoint 
router.get('/:habitName',  async (req, res) => { 
    //const {habitName, habitDescription, category, frequency, startDate} = req.body;
    let targetHabit = await Habit.find({habitName: req.params.habitName});
    console.log("get habitName :" + req.params.habitName );
    console.log(targetHabit);   
    res.redirect('/dashboard');
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
    res.redirect('/dashboard'); //when post route succes redirect.
});    
//after login find all with same userID in mongoose

router.delete('/', (req, res) => { 
    newHabit.save();     //save to DB
    res.redirect('/dashboard'); //when post route succes redirect.
});    

module.exports = router;