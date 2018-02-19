const bot = require('./bot');
const settings = require('./settings');
const CronJob = require('cron').CronJob;

var job = new CronJob({
  cronTime: settings.CRON_TIME,
  onTick: function(){
      bot();
  }, //run the bot
  start: false,
  timeZone: 'Europe/Dublin'
});
job.start();
