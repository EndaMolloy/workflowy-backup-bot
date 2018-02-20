# workflowy-backup-bot
A puppeteer bot that scrapes your workflowy lists and sends you a copy. The bot is deployed on heroku and the frequency of scrapes is set by a custom heroku scheduler.     

![puppeteer](https://user-images.githubusercontent.com/24863798/36392288-65183b82-15a2-11e8-8941-f1840fd10c8f.png)

## Getting Started

* Mailgun is used to send an email with your scraped data, you can signup for a free Mailgun sandbox account [here](https://www.mailgun.com/).

  From mailgun, you will need both your STMP Login and password. If using the free default options, these credentials will look like the below format. Yes, these are fake! 
  - Default SMTP Login: `postmaster@sandboxsagewaefewr324fsaf9sfd.mailgun.org`
  - Default Password: `c0c9sfsdfwetwesdgsdd6f4b48feab0cb` 

* If you want to deploy to the cloud, there are a number of options each with there own advantages and disadvantages. Check out the [puppeteer troubleshooting doc](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md) for more details. Heroku is used in this example. To deploy to Heroku you need to download the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Note: If you do not wish to deploy your bot you could set up a local cron or anacron job.


## Install

`git clone git@github.com:EndaMolloy/workflowy-backup-bot.git`

`npm install`

## Deploy

Create new Heroku bot:

`heroku create YOURAPPNAME`

Add the puppeteer heroku buildpack (Note: The node version is specified in package.json so the node buildpack gets added automatically):

`https://github.com/jontewks/puppeteer-heroku-buildpack.git`

Deploy to Heroku: 

`git push heroku master`

## Heroku Settings

Your bot should now be sucessfully deployed and hopefully both Node and Chrome frameworks show up in your bot settings on the Heroku dashboard

![heroku-screenshot-settings](https://user-images.githubusercontent.com/24863798/36421212-8fc2778e-162f-11e8-8112-48259b5cacb8.png)

Finally, this is a bot not a web app, you need to make some changes to the default dyno settings under the resources tab. Disable the web process and enable the clock process.

![heroku-screenshot-resources](https://user-images.githubusercontent.com/24863798/36421385-2190f82a-1630-11e8-8911-9b0eb36d51e9.png)

That's it, you should now have a working puppeteer bot.
