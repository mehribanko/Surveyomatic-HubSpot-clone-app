const keys = require('../config/keys');
const checkLogin = require('../middlewares/checkLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
    app.post('/api/stripe', checkLogin, async (req,res) => {
          
          const charge = await  stripe.charges.create({
                amount: 1000,
                currency: 'usd',
                description: '$10 for 10 credits',
                source: req.body.id,
            });

            req.user.credits += 10;
            const user = await req.user.save();
            res.send(user);
        }
    )
};