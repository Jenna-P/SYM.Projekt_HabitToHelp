const request = require('supertest');
const app = require('../app');
//const expect = require('expect');

//validate 
// empty input, not match pw with pw-con, 
//pw length 

// POST /signup 
describe('POST /signup', () => {
    it('should sign up with username, name , email and password ', () => {
        return request(app)
        .post('/signup')
        .send({username: 'test', name: 'testName', email: 'test@test.com', password: 'abc123', password_confirm: 'abc123' })
        .expect(201)
        .then((res) => {
            expect(res.body).toEqual(
              expect.objectContaining({
                  username: expect.any(String),
                  name: expect.any(String),
                  email: expect.any(String),
                  password: expect.anything(),
          })
        );
    });
})
  
    //check empty input
    it('should return err, if input is empty', () => {
        return request(app).post('/signup')
        .send({username: '', name: '', email: '', password: '', password_confirm: '' })
        .expect('err'); //Internal server error
    });

    //check password and pw_confirm match
    it('should return err, if pw and pw_confirm does not match', () => {
        return request(app).post('/signup')
        .send({password: '123', password_confirm: '456' })
       // .expect(password).not.toBe(password_confirm)
        .expect('err'); 
    });

    it('should return err, if pw is less then 6 character', () => {
        const password = '123';
        expect(password.length).toBeLessThan(6)
        return request(app).post('/signup')
        //.expect(password.length).toBeLessThan(6)
        .send(password)
        .expect('err');
    });
});





        
    






