var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env];

//var Customer = require('./models/customer.js');
var stripe = require('stripe')(config.stripeSecret);

module.exports = function(req, res, next) {
  'use strict';
  // obtain StripeToken
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
      if (err.type === 'StripeCardError') {
        return res.json({success: false, reason: 'Sorry, this card has been declined.'});
      }
      next(err);
    }
    else {
      res.json({success: true});
      console.log('CHARGE: Successful plan sent to Stripe!', customer);
    }
  });
};
