const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

//Load User model
const User = require('../models/User');

/* ** The local authentication strategy authenticates users using a username and password. 
The strategy requires a verify callback, 
which accepts these credentials and calls done providing a user.*/

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
          //match User
          User.findOne({ email: email})
            .then(user => {
                if(!user) {
                    return done(null, false, {message: 'That email is not registered'});
                }

                //Match pw
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Password incorrect'});
                    }
                });
            })
            .catch(err => console.log(err));

        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });


}

/* Each subsequent request will not contain credentials, 
but rather the unique cookie that identifies the session. 
In order to support login sessions, 
Passport will serialize and deserialize user instances to and from the session.*/ 