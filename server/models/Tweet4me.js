'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tweet4meSchema,
    Tweet4me;


tweet4meSchema = new Schema({
  user: {type: String, unique: true},

  topics: [String],

  lastViewed: Date,

  plan: {type: String, default: 'startup'},
  
  tweets:  [{
    topic:   String,
    url:     String,
    text:    String,
    added:   Date,
    tweeted: Boolean
  }]
});

tweet4meSchema.methods.viewed = function() {
  this.lastViewed = Date.now();
  this.save();
};

tweet4meSchema.methods.isDublicate = function(url) {
  var index = -1;
  this.tweets.forEach(function(tw, i) {
    if (tw.url === url) {
      index = i;
    }
  });
  return index !== -1;
};

Tweet4me = mongoose.model('Tweet4me', tweet4meSchema);

Tweet4me.find({}).exec(function(err, collection) {
  collection.forEach(function(t4m) {
    if (t4m.user === 'sophielapere@hotmail.com') {
      t4m.remove();
    }
  });
  
  Tweet4me.create({
    user: 'galilearodrigue123@gmail.com',
    topics: ['one direction', 'justin beiber', 'janoskians'],
    tweets: []
  });

  Tweet4me.create({
    user: 'akiraism11@icloud.com',
    topics: ['modeling', 'japanese', 'random tweets'],
    tweets: []
  });

  Tweet4me.create({
    user: 'pee@poopmail.com',
    topics: ['odd Future'],
    tweets: []
  });

  Tweet4me.create({
    user: 'efrias8900@gmail.com',
    topics: ['change'],
    tweets: []
  });

  Tweet4me.create({
    user: 'reina.kool@hotmail.com',
    tweets: [],
    topics: ['justin bieber', 'love', 'happiness', 'friends'],
    plan: 'enterprise'
  });

  if (collection.length === 0) {
    Tweet4me.create({
      user: 'stefan@stefanritter.com',
      topics: ['HTML5', 'javascript', 'node.js', 'angular.js'],
      tweets: []
    });
    Tweet4me.create({
      user: 'sophielapere@hotmail.com',
      topics: ['pictures'],
      tweets: []
    });
    
    Tweet4me.create({
      user: 'stevelavery118@mail.com',
      topics: ['football'],
      tweets: []
    });

    Tweet4me.create({
      user: 'jr.santander.b@hotmail.com',
      topics: ['rap', 'hiphop', 'reggae'],
      tweets: []
    });
    
    Tweet4me.create({
      user: 'maxfaulkner38@gmail.co.uk',
      topics: ['football', 'funny'],
      tweets: []
    });

    Tweet4me.create({
      user: 'rich_wyn2001@yahoo.co.uk',
      topics: ['gaa', 'football', 'sport', 'poker', 'business'],
      tweets: []
    });
  
    Tweet4me.create({
      user: 'deanmccarthy91@hotmail.co.uk',
      topics: ['funny stuff', 'funny facts', 'jokes', 'humour', 'sarcasm', 'celebs'],
      tweets: []
    });
    
    Tweet4me.create({
      user: 'essensaemj@icloud.com',
      topics: ['marijuana'],
      tweets: []
    });
    
    Tweet4me.create({
      user: 'jenbolan@icloud.com',
      topics: ['forever Living Products', 'aloe vera', 'be your own boss', 'mlm', 'work from home', 'living the dream'],
      tweets: [{
        topic: 'aloe vera',
        url: 'http://wp.me/pE94w-2ih',
        text: 'Benefits of Aloe Vera Juice http://wp.me/pE94w-2ih via @wordpressdotcom',
        added: new Date('May 7, 2014')
      }, {
        topic: 'work from home',
        url: 'http://www.buzzfeed.com/adamdavis/thoughts-you-always-have-when-you-work-from-home',
        text: '71 Thoughts You Have When You Work From Home http://www.buzzfeed.com/adamdavis/thoughts-you-always-have-when-you-work-from-home via @amdhit @buzzfeed',
        added: new Date('May 7, 2014')
      }, {
        topic: 'living the dream',
        url: 'http://www.projecteve.com/living-the-dream/',
        text: 'Living the dream http://www.projecteve.com/living-the-dream/ via @projecteve1',
        added: new Date('May 7, 2014')
      }]
    });

    Tweet4me.create({
      user: 'calebrobbins@att.net',
      topics: ['skateboarding', 'sports'],
      tweets: [{
        topic: 'skateboarding',
        url: 'http://skateboarding.transworld.net/1000197156/videos/skate-cause-video/',
        text: 'Skate For A Cause Video - Transworld Skateboarding: http://skateboarding.transworld.net/1000197156/videos/skate-cause-video/',
        added: new Date('May 6, 2014')
      }, {
        topic: 'sports',
        url: 'http://sports.yahoo.com/news/world-cup-security-compared-iraq-afghanistan-184701292--sow.html',
        text: 'World Cup security compared with Iraq, Afghanistan http://sports.yahoo.com/news/world-cup-security-compared-iraq-afghanistan-184701292--sow.html via @YahooSports',
        added: new Date('May 6, 2014')
      }, {
        topic: 'skateboarding',
        url: 'http://www.theguardian.com/film/video/2014/may/02/hill-street-dublin-skateboarding-documentary-video',
        text: 'Hill Street: How Dublin ground out its place in the skateboarding scene - video ' +
              'http://www.theguardian.com/film/video/2014/may/02/hill-street-dublin-skateboarding-documentary-video via @guardian',
        added: new Date('May 6, 2014')
      }]
    });
    
    Tweet4me.create({
      user: 'skythecowRG31@gmail.com',
      topics: ['minecraft'],
      tweets: [{
        topic: 'minecraft',
        url: 'http://buswk.co/1san1xb',
        text: 'To Teach and Delight, Denmark Recreates Itself in Minecraft  http://buswk.co/1san1xb via @BW',
        added: new Date('May 6, 2014')
      }, {
        topic: 'minecraft',
        url: 'http://l.gamespot.com/1fIBBKL',
        text: 'This is why we can\'t have nice things: Players destroy Danish government\'s Minecraft model. http://l.gamespot.com/1fIBBKL',
        added: new Date('May 6, 2014')
      }, {
        topic: 'minecraft',
        url: 'http://aol.it/1mwqq64',
        text: 'Captive Minecraft world puts baby in a corner  http://aol.it/1mwqq64 via @joystiq',
        added: new Date('May 6, 2014')
      }]
    });

    Tweet4me.create({
      user: 'anslem92@live.co.uk',
      topics: ['graphic design', 'SEO', 'photography'],
      tweets: [{
        topic: 'graphic design',
        url: 'http://shar.es/SGuTI',
        text: '10 best graphic design tutorials & tips - Features http://shar.es/SGuTI via @digital_arts',
        added: new Date('May 5, 2014')
      }, {
        topic: 'SEO',
        url: 'http://goo.gl/9SrFpd',
        text: '10 SEO Mistakes You Can\'t Afford with Your Content http://goo.gl/9SrFpd  via @Gazalla',
        added: new Date('May 5, 2014')
      }, {
        topic: 'photography',
        url: 'http://www.tocofi.com/is-there-a-wrong-way-to-hold-a-camera/',
        text: 'Is There a Wrong Way to Hold a Camera? http://www.tocofi.com/is-there-a-wrong-way-to-hold-a-camera/',
        added: new Date('May 5, 2014')
      },

      {
        topic: 'photography',
        url: 'http://www.instructables.com/id/Double-exposure-photography-with-an-iphone/',
        text: '6 steps to Double exposure photography with an iphone http://www.instructables.com/id/Double-exposure-photography-with-an-iphone/',
        added: new Date('May 6, 2014')
      }, {
        topic: 'photography',
        url: 'http://www.digitalcameraworld.com/2014/04/30/camera-cleaning-5-ways-to-healthcheck-your-camera-with-confidence/',
        text: 'Camera cleaning: 5 ways to healthcheck your camera with confidence! http://www.digitalcameraworld.com/2014/04/30/camera-cleaning-5-ways-to-healthcheck-your-camera-with-confidence/',
        added: new Date('May 6, 2014')
      }, {
        topic: 'graphic design',
        url: 'http://www.creativebloq.com/typography/pro-tips-flawless-typography-5132670',
        text: '10 pro tips for perfect typography @CreativeBloQ http://www.creativebloq.com/typography/pro-tips-flawless-typography-5132670',
        added: new Date('May 6, 2014')
      }]
    });

    Tweet4me.create({
      user: 'atmb24601@gmail.com',
      topics: ['running'],
      tweets: [{
        topic: 'running',
        url: 'http://po.st/zQPYnh',
        text: 'Workout Of The Week: Tempo Run—With A Twist! - Competitor.com http://po.st/zQPYnh via @runcompetitor',
        added: new Date('May 5, 2014')
      }, {
        topic: 'running',
        url: 'http://www.theguardian.com/lifeandstyle/the-running-blog/2014/may/05/weekend-running-post-run-workout-treats-food',
        text: 'How was your weekend running? http://www.theguardian.com/lifeandstyle/the-running-blog/2014/may/05/weekend-running-post-run-workout-treats-food via @guardian',
        added: new Date('May 5, 2014')
      }, {
        topic: 'running',
        url: 'https://www.youtube.com/watch?v=4WVTG3dXuVM',
        text: 'Need #motivation to go running? Check out these Geese jogging down the road https://www.youtube.com/watch?v=4WVTG3dXuVM',
        added: new Date('May 5, 2014')
      },

      {
        topic: 'running',
        url: 'http://www.express.co.uk/life-style/health/474180/Reviews-of-the-latest-trainers-and-running-shoes-from-Adidas-Nike-Puma-and-New-Balance',
        text: 'Reviews of the latest trainers and running shoes from Adidas, Nike, Puma and New Balance '+
              'http://www.express.co.uk/life-style/health/474180/Reviews-of-the-latest-trainers-and-running-shoes-from-Adidas-Nike-Puma-and-New-Balance via @daily_express',
        added: new Date('May 6, 2014')
      }, {
        topic: 'running',
        url: 'http://lissyruns.com/2014/05/06/why-running-a-marathon-isnt-the-hardest-thing-youll-ever-do/',
        text: 'Why running a marathon isn’t the hardest thing you’ll ever do http://lissyruns.com/2014/05/06/why-running-a-marathon-isnt-the-hardest-thing-youll-ever-do/ via @lissyruns',
        added: new Date('May 6, 2014')
      }, {
        topic: 'running',
        url: 'http://po.st/8MZDi4',
        text: 'Video: Sh*t Barefoot Runners Say http://po.st/8MZDi4 via @runcompetitor',
        added: new Date('May 6, 2014')
      },

      {
        topic: 'running',
        url: 'http://www.runnersworld.com/injury-prevention-recovery/the-importance-of-breaking-in-new-shoes',
        text: 'The Importance of Breaking In New Shoes via @RunnersWorld http://www.runnersworld.com/injury-prevention-recovery/the-importance-of-breaking-in-new-shoes',
        added: new Date('May 7, 2014')
      }, {
        topic: 'running',
        url: 'http://www.active.com/fitness/articles/why-is-a-strong-core-important',
        text: 'Why is a Strong Core Important for #running? http://www.active.com/fitness/articles/why-is-a-strong-core-important via @active',
        added: new Date('May 7, 2014')
      }, {
        topic: 'running',
        url: 'http://blog.runkeeper.com/1657/why-you-need-a-strong-core-for-running/',
        text: 'Great tips for increasing core strength and your running stability: http://blog.runkeeper.com/1657/why-you-need-a-strong-core-for-running/ via @runkeeper',
        added: new Date('May 7, 2014')
      }]
    });
  }
});