var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env];

//var Customer = require('./models/customer.js');
var stripe = require('stripe')(config.stripeSecret);

module.exports = function(req, res, next) {
  'use strict';
  // obtain StripeToken
  var stripeToken = req.body;
  
  console.log(req.body.email);
  /*var newCustomer = new Customer({token: stripeToken });
  newCustomer.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('CHARGE: Success!');
    }
  });*/
  
  // create charge
  var charge = {
    amount: 10*100,
    currency: 'USD',
    card: stripeToken.id
  };
  
  stripe.charges.create(charge, function(err, charge) {
    console.log(charge);
    if(err) {
      console.log('CHARGE ERROR: ', err);
      if (err.type === 'StripeCardError') {
        return res.json({success: false, reason: 'Sorry, this card has been declined.'});
      }
      next(err);
    }
    else {
      res.json({success: true});
      console.log('CHARGE: Successful charge sent to Stripe!', charge);
    }
  });
};
