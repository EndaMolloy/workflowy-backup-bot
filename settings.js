module.exports = {
  //login creditionals for workflowy
  WORKFLOWY_USERNAME: process.env.WORKFLOWY_USERNAME,
  WORKFLOWY_PASSWORD: process.env.WORKFLOWY_PASSWORD,

  //Mailgun settings
  MAILGUN_SMTP_LOGIN: process.env.MAILGUN_SMTP_LOGIN,
  MAILGUN_PASS: process.env.MAILGUN_PASS,

  //Cronjob time schedule
  //At 04:05 every Monday
  // 5 4 * * 1
  CRON_TIME: process.env.CRON_TIME
}
