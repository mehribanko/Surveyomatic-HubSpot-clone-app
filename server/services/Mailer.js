const keys = require('../config/keys');
const mailgun = require('mailgun-js')({apiKey: keys.mailgunAPiKey, domain: keys.domainName});

class Mailer {
// whenever 'new' keyword is called, constructor is called
// Mailer class is designed to work with a comma-separated string of email addresses
    constructor({subject, recipients}, template){
        this.data = {
        from: 'mehriban@surveyomatic.cloudns.biz',
        to: this.formatAddresses(recipients),
        subject: subject,
        html: template
    };
  }

  formatAddresses(recipients){
    return recipients.map(({email}) => email).join(",");
  }

  async send(){
    const res = await mailgun.messages().send(this.data);
    return res;
  }

}

module.exports = Mailer;


