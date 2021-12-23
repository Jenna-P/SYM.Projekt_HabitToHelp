const request = require('supertest');
const app = require('../app');
require('dotenv').config();

const supertest = require('supertest');
const requestWithSupertest = supertest(app);

const Habit = require('../models/Habit'); //model for habits from db

// TESTCASE 1:
// get /(dashboard)  (test to working jest)
describe('GET /dashboard', () => {
    it('should respond to dashboard', (done) => {
        request(app)
      .get('/')
      .send('dashboard')
      .expect(200, done)
    });
});

// // Cleans up database between each test
// afterEach(async () => {
//     await Habit.deleteMany()
// });