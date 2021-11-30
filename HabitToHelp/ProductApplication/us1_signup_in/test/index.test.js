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
describe('POST /dashboard', () => {
    it('Should respond with dashboard when sign-in success', function() {
        return request(app)
        .post('/dashboard')
        .send({username: 'test', password: 'abc123'})
        .expect(201)
        .then((res) => {
            expect(res.body).toEqual(
              expect.objectContaining({
                  username: expect.any(String),
                  password: expect.anything()
                })
            );
        })
    })
});

