const request = require('supertest');
const app = require('../app');
//const expect = require('expect');

//validate 
// empty input, not match pw with pw-con, 
//pw length 

// POST /signup 
describe('POST /signup', () => {
    it('should sign up with username, name , email and password ', () => {
        const testUser = {username: 'test', name: 'testName', email: 'test@test.com', password: 'abc123', password_confirm: 'abc123' };
        expect(testUser).toBeDefined();
        return request(app)
        .post('/signup')
        .send(testUser)
        .expect(201)     
    });

  
    //check empty input
    it('should return err, if input is empty', () => {
        const testUser = {username: null, name: null, email: '', password: '', password_confirm: '' };
        expect(testUser.username).toBeNull();
        return request(app).post('/signup')
        .send(testUser)       
    });

    //check password and pw_confirm match
    it('should return err, if pw and pw_confirm does not match', () => {
        const testUser = {password: '123', password_confirm: '456' };
        expect(testUser.password).not.toBe(testUser.password_confirm);
        return request(app).post('/signup')
        .send(testUser)  
    });

    it('should return err, if pw is less then 6 character', () => {
        const testUser = {password: '123'};
        expect(testUser.password.length).toBeLessThan(6)
        return request(app).post('/signup')
        .send(testUser)      
    });
});
