
const testObjekter = require('./testObjekter');

//import habitData from './testObjekter.js';

function assignHabitName() {
    const habitName = "Drik vand";
    //console.log(habitName);
    return habitName;
}

const habitType = 1;
const habitTypeBoo = Boolean(habitType);

function checkHabitType(habitTypeBoo) {
    if(habitTypeBoo == "true" || habitTypeBoo == 'false') {
        return Boolean(1);
    }
}

function setHabitTypeGood(habitType_1) {
    if(habitType_1 == false) {
        habitType_1 = true;
        return habitType_1;
    }
    else {
        console.log("Error: habittype not defined");
    }
}

function setHabitTypeBad(habitType_2) {
    if(habitType_2 == true) {
        habitType_2 = false;
        return habitType_2;

    }
    else {
        console.log("Error: HabitType is not defined");
    }
}

function takeDataHabit() {
    const test = 
    testObjekter.habit[0].name ;
    return test;


}




module.exports = {assignHabitName, checkHabitType, setHabitTypeGood, setHabitTypeBad, takeDataHabit};

/*var habit = {
    "habit" : [{
        "name" : "Drik vand",
        "good" : true
    },
    {
        "name" : "Rygning",
        "good" : false
    },
    {
        "name" : "Neglebidning",
        "good" : false
    },
    {
        "name" : "Gå i træningscenter",
        "good" : true
    }]
};*/





/*function habit(name, good) {
    this.name = name;
    this.good = good;
}

const habit_1 = new habit("Drik vand", true);
const habit_2 = new habit("Rygning", false);
const habit_3 = new habit("Neglebidning", false);
const habit_4 = new habit("Gå i træningscenter", true);
*/








/*function assignHabitType() {
    const habitType = 1;
    const placeholder = boolean(habitType);
    return placeholder;
}*/