const request = require('supertest');
const app = require('../app');

/*TESTCASE 1:*/
// get /(index)  (test to working jest)
describe('GET /', () => {
    it('should responde to index', (done) => {
        request(app)
      .get('/')
      .send('index')
      .expect(200, done)
    })
});

/*TESTCASE 2:*/
describe('GET /', () => {
    it('Should respond with dashboard when sign-in success', (done) => {

    });
});

describe('GET /', () => {
    it('', (done) => {

    });
});

