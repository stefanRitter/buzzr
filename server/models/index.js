'use strict';

var User = require('./User'),
    StringArray = require('./StringArray'),
    LinkArray = require('./LinkArray'),
    CronJob = require('./CronJob');

User.createDefaultUsers();
StringArray.createArrays();
LinkArray.createArrays();
CronJob.createCronJobs();

require('./Buzzr');
