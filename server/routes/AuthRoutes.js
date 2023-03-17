const passport = require("passport");

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate("google", { scope: ["profile", "email"] })  //here the 'google' name refers to GoogleStrategy under the hood (in passport.js file)
  );

  app.get('/auth/google/callback', passport.authenticate("google"),
  (req,res) => {
    res.redirect('/surveys')
  }
  );

  app.get('/api/current_user', (req,res) => {
    res.send(req.user);
  })
  
  app.get('/api/logout', (req,res)=>{
    req.logout();
    res.redirect('/');
  })
};




