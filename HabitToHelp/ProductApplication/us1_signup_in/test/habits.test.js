const { expect, it } = require('@jest/globals');
//const expectExport = require('expect');
//const { exists } = require('fs');
const request = require('supertest');
//const { describe } = require('yargs');

const testObjekter = require('../testObjekter');

const habits = require('../habits');

describe('habits', () => {
    //US 1.1 - Oprette en vane
    it('should have a name', () => {
        expect(habits.assignHabitName()).not.toBeNull();
    });
    it('habit should not be empty', () => {
        expect(habits.habitType).not.toBeNull();
    });
    it('should be true if good', () => {
        const testVarHabOb = false;
        expect(habits.setHabitTypeGood(testVarHabOb)).toBeTruthy;
    });
    it('should be false if bad', () => {
        const testVarHabOb_1 = true;
        expect(habits.setHabitTypeBad(testVarHabOb_1)).toBeFalsy;
    });

    //US 1 - Se liste over vaner
    //If need to show a list
    it('should contain at least one item', () => {
        expect(testObjekter.habit).not.toBeNull();
    });
    it('should contain a name', () => {
        expect(habits.takeDataHabit()).not.toBeNull();
    });

    //US 1.3 - Slette en vane
    it('habit should exist', () => {
        expect(habits.pressToDelete.habit).not.toBeNull();
    });

    it('should be able to be deleted', () => {
       expect(habits.pressToDelete()).toBeTruthy();
    });

    
   //US 1.2 og 1.2.1 - Redigere en vane (både navn og type)
   it('habit should exist', () => {
    expect(habits.pressToDelete.habit).not.toBeNull();
});

    it('habit should be edited', () => {
        let newName = "spise vitaminer";
        let newGood = false;
        let test = habits.editHabit();
        expect(test[0]).toBe(newName);
        expect(test[1]).toBe(newGood); 
    });
})



    /*it('should be good', () => {
        const testGoodOB = false;
        expect(chosenGood(testGoodOB)).toBeTruthy();
    });*/








   /* it('should be a boolean', () => {
        expect(typeof habitTypeBoo === 'boolean').not.toBeNull();
    });
    it('should have either a good or a bad type', () => {
        expect(checkHabitType).toBeTruthty();
    });*/
    /*it('should not be NaN', () => {
        expect(assignHabitType).not.toBe(Boolean);
    })*/


