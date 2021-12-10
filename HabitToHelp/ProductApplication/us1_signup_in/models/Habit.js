const mongoose = require('mongoose');

// const frequency = Object.freeze({ 
//     daily, 
//     weekly,
//     monthly
// });

const startDate = new Date("DD-MM-YYYY");

const HabitSchema = new mongoose.Schema({
    habitName: {
        type: String,
        require: true
    },
    habitDescription: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    frequency: {
        type: String,
        require: true
    },
    startDate: {
        type: Date,
        startDate,
        require: true
    },
    userID: {
        type: String,
        require: true
    }
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;