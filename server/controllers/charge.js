var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env];

var stripe = require('stripe')(config.stripeSecret);

var sendMail = require('../utils/sendMail.js');

module.exports = function(req, res, next) {
  'use strict';
  var stripeToken = req.body.token,
      plan = req.body.plan;
  
  stripe.customers.create({
    card: stripeToken.id,
    plan: plan,
    email: stripeToken.email
  }, function(err, customer) {
    console.log(customer);
    if(err) {
      console.log('CHARGE ERROR: ', err);
      
      sendMail.send('I just failed to create a New STRIPE plan: ' +
        stripeToken.email + ' ' + plan + ' ' + err.toString());
      
      if (err.type === 'StripeCardError') {
        return res.json({success: false, reason: 'Sorry, this card has been declined.'});
      }
      next(err);
    }
    else {
      console.log('CHARGE: Successful plan sent to Stripe!', customer);
      res.json({success: true});
      sendMail.send('I just created a New STRIPE plan: ' + stripeToken.email + ' ' + plan);
    }
  });
};
