const keys = require('../config/keys');
const mailgun = require('mailgun-js')({apiKey: keys.mailgunAPiKey, domain: keys.domainName});

class Mailer {
// whenever 'new' keyword is called, constructor is called
    constructor({subject, recipients}, content){
        this.data = {
        from: 'mehrikodes@gmail.com',
        to: this.formatAddresses(recipients),
        subject: subject,
        html: content
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


