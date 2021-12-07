//prevent to direct address .../dashboard without login

module.exports = { 
    ensureAuthenticated: function(req, res, next) {  //need to put "ensureAuthenticated" routes that want protect
      if (req.isAuthenticated()) {
        return next();
      }
      //req.flash('error_msg', 'Please log in to view that resource');
      res.redirect('index');
      console.log("err : login first ");
    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/dashboard');      
    }
  };