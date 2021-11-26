
const request = require('supertest');
const app = require('./app');
const expect = require('expect');


 

//validate 
// empty input, not match pw with pw-con, 
//pw length 

// get /(index)  (test to working jest)
describe('GET /', () => {
    it('should responde to index', (done) => {
        request(app)
      .get('/')
      .send('Signup for an account')
      .expect(200, done)
 
    })
})

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
        .expect(500); //Internal server error

    });

    //check password and pw_confirm match
    it('should return err, if pw and pw_confirm does not match', () => {
        return request(app).post('/signup')
        .send({password: '123', password_confirm: '456' })
       // .expect(password).not.toBe(password_confirm)
        .expect(500); //Internal server error
        

    });

    // it('should return err, if pw is less then 6 character', () => {
    //     const password = '123';
    //     return request(app).post('/signup')
    //     .send({password: '123'})
    //     .expect(422)
    //     .expect(password.length).toBeLessThan(6)



    //check pw length < 6
    // it('should return err, if pw is less then 6 character', () => {
    //     const password = '123';
    //     return request(app).post('/signup')
    //     .send({password: '123'})
        // .expect(422)
        
    //     .then((res) => {
        // .expect(password.length).toBeLessThan(6)
        
    
     //.expect(password).toHaveLength(3)         
          
      
    // });
    //     .then(() => {
    //         expect(password.length).toEqual(
    //         expect.objectContaining({
                
    //             password: expect.toBeLessThan(6),
    //     })
    //     );
    
    // });






});

