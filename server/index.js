const express = require("express");
require("./services/passport");
const mongoose= require ('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 9000;
const app = express();

require("./routes/AuthRoutes")(app);

app.listen(PORT, function () {
  console.log(`server running on ${PORT}`);
});
