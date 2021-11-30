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
describe('POST /signUpSuccess', () => {
    it('Should respond with dashboard when sign-in success', function() {
        const testUser = {email: 'test', password: 'abc123'}
        expect(testUser.email).toBeDefined();
        expect(testUser.password).toBeDefined();
        return request(app)
        .post('/')
        .send(testUser)
        .expect(201)
    })
});

