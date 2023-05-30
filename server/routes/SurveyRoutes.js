const creditCheck = require("../middlewares/creditCheck");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
    app.post('/api/surveys', requireLogin, creditCheck, (req,res) => {
    
    })          
};