const { expect, it } = require('@jest/globals');
const expectExport = require('expect');
//const { exists } = require('fs');
const request = require('supertest');
//const { describe } = require('yargs');
const assignHabitName = require('./habits');
const habitType = require('./habits');
const setHabitTypeGood = require('./habits');
const setHabitTypeBad = require('./habits');
const habitJSON = require('./habits');

describe('habits', () => {
    //US 1.1
    it('should have a name', () => {
        expect(assignHabitName).not.toBeNull();
    });
    it('habit should not be empty', () => {
        expect(habitType).not.toBeNull();
    });
    //US 1.1.1
    it('habit should not be empty', () => {
        expect(habitType).not.toBeNull();
    });
    it('should be true if good', () => {
        const testVarHabOb = false;
        expect(setHabitTypeGood(testVarHabOb)).toBeTruthy;
    });
    it('should be false if bad', () => {
        const testVarHabOb_1 = true;
        expect(setHabitTypeBad(testVarHabOb_1)).toBeFalsy;
    });
    //US 1
    //If need to show a list
    it('should contain at least one item', () => {
        expect(habitJSON).not.toBeNull();
    });
    it('should contain a name', () => {
        expect(getHabit().name).not.toBeNull();
    });
    it('should contain good', () => {
        expect(getHabit().type).not.toBeNull();
    });



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

});




