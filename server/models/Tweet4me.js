'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tweet4meSchema,
    Tweet4me;


tweet4meSchema = new Schema({
  user: {type: String},

  topics: [String],

  lastViewed: Date,
  
  tweets:  [{
    topic:  String,
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
  collection.forEach(function(model) {
    model.remove();
  });
  if (collection.length === 0) {
    Tweet4me.create({
      user: 'calebrobbins@att.net',
      topics: ['skateboarding', 'sports'],
      tweets: [{
        topic: '',
        url: '',
        text: '',
        added: new Date(2014, 5, 6)
      }, {
        topic: '',
        url: '',
        text: '',
        added: new Date(2014, 5, 6)
      }, {
        topic: '',
        url: '',
        text: '',
        added: new Date(2014, 5, 6)
      }]
    });
    
    Tweet4me.create({
      user: 'skythecowRG31@gmail.com',
      topics: ['minecraft'],
      tweets: [{
        topic: 'minecraft',
        url: '',
        text: '',
        added: new Date(2014, 5, 6)
      }, {
        topic: 'minecraft',
        url: '',
        text: '',
        added: new Date(2014, 5, 6)
      }, {
        topic: 'minecraft',
        url: '',
        text: '',
        added: new Date(2014, 5, 6)
      }]
    });

    Tweet4me.create({
      user: 'anslem92@live.co.uk',
      topics: ['graphic design', 'SEO', 'photography'],
      tweets: [{
        topic: 'graphic design',
        url: 'http://shar.es/SGuTI',
        text: '10 best graphic design tutorials & tips - Features http://shar.es/SGuTI via @digital_arts',
        added: new Date(2014, 5, 5)
      }, {
        topic: 'SEO',
        url: 'http://goo.gl/9SrFpd',
        text: '10 SEO Mistakes You Can\'t Afford with Your Content http://goo.gl/9SrFpd  via @Gazalla',
        added: new Date(2014, 5, 5)
      }, {
        topic: 'photography',
        url: 'http://www.tocofi.com/is-there-a-wrong-way-to-hold-a-camera/',
        text: 'Is There a Wrong Way to Hold a Camera? http://www.tocofi.com/is-there-a-wrong-way-to-hold-a-camera/',
        added: new Date(2014, 5, 5)
      }]
    });

    Tweet4me.create({
      user: 'atmb24601@gmail.com',
      topics: ['running'],
      tweets: [{
        topic: 'running',
        url: 'http://po.st/zQPYnh',
        text: 'Workout Of The Week: Tempo Run—With A Twist! - Competitor.com http://po.st/zQPYnh via @runcompetitor',
        added: new Date(2014, 5, 5)
      }, {
        topic: 'running',
        url: 'http://www.theguardian.com/lifeandstyle/the-running-blog/2014/may/05/weekend-running-post-run-workout-treats-food',
        text: 'How was your weekend running? http://www.theguardian.com/lifeandstyle/the-running-blog/2014/may/05/weekend-running-post-run-workout-treats-food via @guardian',
        added: new Date(2014, 5, 5)
      }, {
        topic: 'running',
        url: 'https://www.youtube.com/watch?v=4WVTG3dXuVM',
        text: 'Need #motivation to go running? Check out these Geese jogging down the road https://www.youtube.com/watch?v=4WVTG3dXuVM',
        added: new Date(2014, 5, 5)
      }]
    });
  }
});