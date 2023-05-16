const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);


module.exports = (app) => {
    app.post(
        '/api/stripe', (req,res) => {

            stripe.charges.create({
                amount: 1000,
                currency: 'usd',
                description: '$10 for 10 credits',
                source: req.body.id,
                
            })

        }
    )
};