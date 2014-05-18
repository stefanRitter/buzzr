var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('../config/config')[env],
    stripe = require('stripe')(config.stripeSecret),
    sendMail = require('../utils/sendMail.js'),
    Tweet4me = require('mongoose').model('Tweet4me');


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

      Tweet4me.findOne({user: stripeToken.email}, function(err, t4m) {
        if (t4m) {
          t4m.status = 'active';
          t4m.plan = plan;
          t4m.save();
        }
      });
    }
  });
};
