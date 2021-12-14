const request = require('supertest');
const app = require('../app');

describe('', () => {
    it('should get info from DB', () => {
        expect(getProfileData()).not.toBeEmpty();
    });
})