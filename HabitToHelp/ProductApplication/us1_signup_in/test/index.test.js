const request = require('supertest');
const app = require('../app');

// get /(index)  (test to working jest)
describe('GET /', () => {
    it('should responde to index', (done) => {
        request(app)
      .get('/')
      .send('index')
      .expect(200, done)
    })
})

