const mongoose = require('mongoose');

// const frequency = Object.freeze({ 
//     daily, 
//     weekly,
//     monthly
// });

const startDate = new Date("DD-MM-YYYY");

const HabitSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: Boolean,
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
    userId: {
        type: String,
        require: true
    }
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;