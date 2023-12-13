const checkCredit = require("../middlewares/checkCredit");
const checkLogin = require("../middlewares/checkLogin");
const mongoose= require("mongoose");
const Mailer = require('../services/Mailer');
const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.post('/api/surveys', checkLogin, checkCredit, (req,res) => {

        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title: title,
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email=> ({email: email.trim()})),
            belongsTo: req.user.id,
            sentDate: Date.now()
        })


        const mailer = new Mailer(survey, template ); 


    })          
};