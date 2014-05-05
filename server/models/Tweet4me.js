'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tweet4meSchema,
    Tweet4me;


tweet4meSchema = new Schema({
  user: {type: String},

  topic: {type: String},

  lastViewed: Date,
  
  tweets:  [{
    url:    String,
    text:   String,
    added:  Date
  }]
});

tweet4meSchema.methods.viewed = function() {
  this.lastViewed = Date.now();
  this.save();
};

Tweet4me = mongoose.model('Tweet4me', tweet4meSchema);

Tweet4me.find({}).exec(function(err, collection) {
  if (collection.length === 0) {
    Tweet4me.create({
      user: 'anslem92@live.co.uk',
      topic: 'Graphic design SEO photography',
      tweets: [{
        url: 'http://shar.es/SGuTI',
        text: '10 best graphic design tutorials & tips - Features http://shar.es/SGuTI via @digital_arts',
        added: Date.now()
      }, {
        url: 'http://goo.gl/9SrFpd',
        text: '10 SEO Mistakes You Can\'t Afford with Your Content http://goo.gl/9SrFpd  via @Gazalla',
        added: Date.now()
      }, {
        url: 'http://www.tocofi.com/is-there-a-wrong-way-to-hold-a-camera/',
        text: 'Is There a Wrong Way to Hold a Camera? http://www.tocofi.com/is-there-a-wrong-way-to-hold-a-camera/',
        added: Date.now()
      }]
    });

    Tweet4me.create({
      user: 'atmb24601@gmail.com',
      topic: 'Running',
      tweets: [{
        url: 'http://po.st/zQPYnh',
        text: 'Workout Of The Week: Tempo Run—With A Twist! - Competitor.com http://po.st/zQPYnh via @runcompetitor',
        added: Date.now()
      }, {
        url: 'http://www.theguardian.com/lifeandstyle/the-running-blog/2014/may/05/weekend-running-post-run-workout-treats-food',
        text: 'How was your weekend running? http://www.theguardian.com/lifeandstyle/the-running-blog/2014/may/05/weekend-running-post-run-workout-treats-food via @guardian',
        added: Date.now()
      }, {
        url: 'https://www.youtube.com/watch?v=4WVTG3dXuVM',
        text: 'Need #motivation to go running? Check out these Geese jogging down the road https://www.youtube.com/watch?v=4WVTG3dXuVM',
        added: Date.now()
      }]
    });
  }
});