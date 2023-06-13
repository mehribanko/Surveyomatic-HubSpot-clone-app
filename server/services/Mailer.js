const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
// whenever 'new' keyword is called, constructor is called
    constructor({subject, recipients}, content){
        super();
        this.from_email = new helper.Email('mehrikodes@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
    }
}

module.exports = Mailer;


