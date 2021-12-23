const request = require('supertest');
const app = require('../app');
require('dotenv').config();
// const requestWithSupertest = supertest(app);

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

// describe('GET /:habitName', () => {
//     it('should respond with data from Habit model in database', (done) => {
//         let value = "Run";
//         let habits = Habit.find({habitName: value});
//         expect(habits.habitName).toBe(value);
//     });
// });

const mongoose = require('mongoose')
const url = process.env.DBURL;

beforeAll(async () => {
  await mongoose.connect(url, { useNewUrlParser: true })
});

// describe('GET /dashboard', () => {
//     it('GET /dashboard should show all habits', async (done) => {
//         let habits = await Habit.find({});
//         const res = requestWithSupertest.get('/');
//         expect(res.status).toEqual(200);
// //        expect(res.type).toEqual(expect.stringContaining('json'));
//         expect(res.body).toEqual(habits);
//         done()
//     });  
// });

//  describe('POST /', () => {
//     it('Should save user to database', async (done) => {
//         const res = await requestWithSupertest.post('/')
//         .send({
//             habitName: 'Run',
//             habitDescription: 'Description',
//             category: 'Good',
//             frequency: 'Daily',
//             startDate: '2021-12-11T00:00:00.000+00:00',
//             userID: '61af3bf56001845e0398cab7'
//         })
//         done()
//     });
//  });

// // Cleans up database between each test
// afterEach(async () => {
//     await Habit.deleteMany()
// });