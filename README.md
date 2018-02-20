# workflowy-backup-bot
A puppeteer bot that scrapes your workflowy lists and sends you a copy. The bot is deployed on heroku and the frequency of scrapes is set by a custom heroku scheduler.     

![puppeteer](https://user-images.githubusercontent.com/24863798/36392288-65183b82-15a2-11e8-8941-f1840fd10c8f.png)

## Getting Started

* Mailgun is used to send an email with your scraped data, you can signup for a free Mailgun sandbox account [here](https://www.mailgun.com/)

  You will need both your STMP Login and password. If using the free default options, these credentials will look like the below format. Yes, these are fake! 
  - Default SMTP Login: `postmaster@sandboxsagewaefewr324fsaf9sfd.mailgun.org`
  - Default Password: `c0c9sfsdfwetwesdgsdd6f4b48feab0cb` 

* If you want to deploy to the cloud, there are a number of options each with there own advantages and disadvantages. Check out the [puppeteer troubleshooting doc](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md) for more details. Heroku is used in this example. The offical [Heroku docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) can guide you through deploying an app if you have not done so before as well as prompt you to install the necessary requirements.
  
