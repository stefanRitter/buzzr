'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    sendMail = require('../utils/sendMail.js'),
    CronJob;


var cronJobSchema = new Schema({
  name:  {
    type: String,
    unique: true,
    index: true
  },
  lastRun: Number,
  runAt: Number,
  task: String
});

cronJobSchema.methods.run = function() {
  var d = new Date(),
      h = d.getUTCHours(),
      t = d.getUTCDate();
    
  if (h >= this.runAt && h <= (this.runAt+1) && t !== this.lastRun) {
    sendMail.send('CronJob '+ this.name +' started');
    this.lastRun = t;
    require(this.task);
    this.save();
  }
};

CronJob = mongoose.model('CronJob', cronJobSchema);

exports.createCronJobs = function() {
  CronJob.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      CronJob.create({
        name: 'update all buzzrs',
        runAt: 4,
        task: '../../worker/cronjobs/updateAll'
      });
    }
  });
  
  var rand = Math.floor(Math.random() * (40 - 35 + 1)) + 35;
  setInterval(function() {
    CronJob.find({}).exec(function(err, collection) {
      collection.forEach(function(cronJob) {
        cronJob.run();
      });
    });
  }, 60000*rand);
};