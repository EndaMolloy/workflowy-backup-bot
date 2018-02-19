const bot = require('./bot');
const CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '*/5 * * * *',
  onTick: function(){
      bot();
  }, //run the bot
  start: false,
  timeZone: 'Europe/Dublin'
});
job.start();
