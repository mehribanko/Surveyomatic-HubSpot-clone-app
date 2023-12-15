const checkCredit = require("../middlewares/checkCredit");
const checkLogin = require("../middlewares/checkLogin");
const mongoose= require("mongoose");
const Mailer = require('../services/Mailer');
const Survey = mongoose.model('surveys');
const emailTemplate = require('../services/templates/emailTemplate');

module.exports = (app) => {
    app.post('/api/surveys', checkLogin, checkCredit, async (req,res) => {

        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title: title,
            subject: subject,
            body: body,
            recipients: recipients.split(',').map(email=> ({email: email.trim()})),
            belongsTo: req.user.id,
            sentDate: Date.now()
        })


        const mailer = new Mailer(survey, emailTemplate(survey));
        try{
            await mailer.send(); 
            await survey.save();
            req.user.credits = req.user.credits -1;
            const user = await req.user.save();
            res.send(user);
        }catch(err){
            res.status(422).send(err);
        }
    }) 
    
    app.get('/api/surveys/thanks', (req,res)=>{
        const htmlResponse = `
        <html>
            <head>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        text-align: center;
                        background-color: #f4f4f4;
                    }
                    .thanks-container {
                        max-width: 600px;
                        margin: 50px auto;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #3498db;
                    }
                </style>
            </head>
            <body>
                <div class="thanks-container">
                    <h1>Thanks for your feedback!</h1>
                </div>
            </body>
        </html>
    `;
        res.send(htmlResponse);
    })
};