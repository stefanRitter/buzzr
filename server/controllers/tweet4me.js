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
    res.json({tweets: tweet4me.tweets, status: tweet4me.status});
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

    var timestamp = tweet4me._id.toString().substring(0,8),
        createdAt = new Date(parseInt(timestamp, 16) * 1000);

    if (createdAt.toLocaleDateString() === (new Date()).toLocaleDateString()) {
      subject = 'Your first tweet suggestions are ready';
    }

    message = '<strong>Hurray, a new set of tweet suggestions are baked and ready to go out!</strong>' +
              '<br><br>' +
              'Hi,' +
              '<br><br>' +
              'You requested tweet suggestions for the topic <strong>' + tweet4me.topics.join(', ') + '</strong>.' +
              '<br><br>' +
              
              '<a href="http://www.buzzr.io/tweet4me/feed?user=' + user + '">'+
              'Click here to go to your Buzzr feed to review and send your tweets.' +
              '</a>'+

              '<br><br>' +
              '<strong>Attention: tomorrow will be the end of your free trial.</strong>.' +
              '<br><br>' +
              
              '<br><br>' +
              'Thanks for tweeting with Buzzr,' +
              '<br>' +
              'Your Team at Buzzr :)'+
              '<br>' +
              '<br>' +
              'PS: We read all our email, simply hit reply and tell us what\'s on your mind!'+
              '<br><br>'+
              '<a href="https://www.buzzr.io/unsubscribe/'+user+'">unsubscribe</a>';

    if (tweet4me.status === 'expired') {
      /*subject = 'Your Tweet4me trial has expired';
      message = '<strong>Your free trial has expired act now!</strong>' +
                '<br><br>' +
                'Hi,' +
                '<br><br>' +
                'Your free trial period for the topics <strong>'+ tweet4me.topics.join(', ') +'</strong> is over and you need to activate your '+
                'subscription plan to continue getting tweet suggestions from Buzzr.' +
                '<br><br>' +
                '<a href="https://www.buzzr.io/tweet4me/upgrade">ACTIVATE your paid subscription plan now to continue tweet4me with Buzzr.</a>' +
                '<br><br>' +
                'Your account will be fully active again right after you complete the sign-up process. And a new set of fresh tweets is already waiting for you!' +
                '<br><br>' +
                '<strong>Need help?</strong>' +
                '<br>' +
                'If you have any questions about activating your paid plan, future payments or billing cycles - get in touch with us by replying to this email.' +
                '<br><br>' +
                'Your Team at Buzzr :)'+
                '<br><br>'+
                '<a href="https://www.buzzr.io/unsubscribe/'+user+'">unsubscribe</a>';*/
      message = '<strong>Hurray, a new set of tweet suggestions are baked and ready to go out!</strong>' +
                '<br><br>' +
                'Hi,' +
                '<br><br>' +
                'You requested tweet suggestions for the topic <strong>' + tweet4me.topics.join(', ') + '</strong>.' +
                '<br><br>' +
                
                '<a href="http://www.buzzr.io/tweet4me/feed?user=' + user + '">'+
                'Click here to go to your Buzzr feed to review and send your tweets.' +
                '</a>'+

                '<br><br>' +
                '<strong>Today is the last day of your free trial.'+
                '<br>'+
                '<a href="https://www.buzzr.io/tweet4me/upgrade">ACTIVATE your paid subscription plan now to continue tweet4me with Buzzr.</a>' +
                '</strong>.' +
                '<br><br>' +
                'If you would like a little bit more time to try out our service just email me and I can extend it for you!'+
                '<br><br>' +
                'Thanks for tweeting with Buzzr,' +
                '<br>' +
                'Your Team at Buzzr :)'+
                '<br>' +
                '<br>' +
                'PS: We read all our email, simply hit reply and tell us what\'s on your mind!'+
                '<br><br>'+
                '<a href="https://www.buzzr.io/unsubscribe/'+user+'">unsubscribe</a>';
    }

    sendgrid.send({
      to: [user],
      from: 'tweet4me@buzzr.io',
      bcc: 'admin@buzzr.io',
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