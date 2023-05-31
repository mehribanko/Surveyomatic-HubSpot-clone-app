const creditCheck = require("../middlewares/creditCheck");
const requireLogin = require("../middlewares/requireLogin");
const mongoose= require("mongoose");
const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.post('/api/surveys', requireLogin, creditCheck, (req,res) => {

        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email=> ({email: email.trim()})),
            belongsTo: req.user.id,
            dateSent: Date.now()
        })
    })          
};