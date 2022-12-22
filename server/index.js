const express = require('express');
const mongoose= require ('mongoose');
const cookieSession= require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require("./models/User");
require("./services/passport");

// we let passport to keep track of our users by using cookies
// to make use of cookies, we need cookieSession

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cookieSession({
  maxAge: 30*24*60*60*1000,
  keys: [keys.cookieKey],
}))

// we are telling passport to use cookie session here 
app.use(passport.initialize());
app.use(passport.session());

require("./routes/AuthRoutes")(app);

app.listen(PORT, function () {
  console.log(`server running on ${PORT}`);
});
