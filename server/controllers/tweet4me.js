'use strict';

var Tweet4me = require('mongoose').model('Tweet4me');

var sendgrid  = require('sendgrid')(
  process.env.SENDGRID_USERNAME,
  process.env.SENDGRID_PASSWORD
);

exports.getByUser = function(req, res) {
  var user = req.params.id; //.toLowerCase().trim();

  Tweet4me.findOne({user: user}).exec(function(err, tweet4me) {
    if (err) { return res.send(500); }
    if (!tweet4me) { return res.json({tweets: []}); }

    tweet4me.viewed();
    res.json({tweets: tweet4me.tweets});
  });
};

exports.addTweet = function(req, res) {
  var tweet = req.body.tweet,
      user = tweet.email;

  if (!tweet.url) { return res.send(500); }
  if (!tweet.text) { return res.send(500); }
  if (!tweet.topic) { return res.send(500); }

  Tweet4me.findOne({user: user}).exec(function(err, tweet4me) {
    if (err) { return res.send(500); }
    if (!tweet4me) { return res.send(500); }
    if (tweet4me.isDublicate(tweet.url)) { return res.send(500); }

    tweet4me.tweets.push({
      topic: tweet.topic,
      url: tweet.url,
      text: tweet.text,
      added: new Date()
    });
    tweet4me.save();
    res.send(200);
  });
};

exports.markTweet = function(req, res) {
  var user = req.params.id,
      mark = req.body.mark,
      url = req.body.url;

  Tweet4me.findOne({user: user}).exec(function(err, tweet4me) {
    if (err) { return res.send(500); }
    if (!tweet4me) { return res.send(500); }

    tweet4me.tweets.forEach(function(tw) {
      if (tw.url === url) {
        tw[mark] = true;
      }
    });
    tweet4me.save();
    res.send(200);
  });
};

exports.sendEmail = function(req, res) {
  var user = req.params.id,
      subject = 'You have new Tweet4Me suggestions!',
      message = '',
      d = new Date();

  if (d.getDay() === 1) {
    subject = 'Happy Monday: start the week with new Tweet4Me suggestions!';
  } else if (d.getDay() === 5) {
    subject = 'Your TGIF Tweets are ready!';
  }

  Tweet4me.findOne({user: user}).exec(function(err, tweet4me) {
    if (err) { return res.send(500); }
    if (!tweet4me) { return res.send(500); }
  
    sendgrid.send({
      to: [user],
      from: 'tweet4me@buzzr.io',
      subject: subject,
      html: message
    }, function(err, json) {
      if (err) {
        console.error(err);
        return res.send(500);
      }
      console.log(json);
      res.send(200);
    });
  });
};