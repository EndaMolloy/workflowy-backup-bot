const bot = require('./bot');
const CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '*/10 * * * *',
  onTick: bot(), //run the bot
  start: false,
  timeZone: 'Europe/Dublin'
});
job.start();
