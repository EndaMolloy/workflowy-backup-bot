require('dotenv').config();
const puppeteer = require('puppeteer');
const settings = require('./settings');
const mailer = require('./nodemailer');

module.exports = async () => {
  //args: ['--no-sandbox', '--disable-setuid-sandbox']
  //setting up puppeteer on Ubuntu and deployment on heroku
  //https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
  const browser = await puppeteer.launch({headless:false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://workflowy.com/accounts/login/');

  //login to workflowy
  await page.click('#id_username');
  await page.keyboard.type(settings.WORKFLOWY_USERNAME);
  await page.click('#id_password');
  await page.keyboard.type(settings.WORKFLOWY_PASSWORD);
  await page.keyboard.press('Enter');

  await page.waitForSelector('#buttonBar', {
    visible: true
  });
  await page.waitFor(1000);

  await page.click('#buttonBar');
  await page.click('#exportAllButton');
  await page.waitFor(1000);
  await page.click('#id_text');
  await page.waitFor(1000);

  const workflowyText = await page.evaluate(() => {
    return document.querySelector('#exportPopup > div.previewWindow.hasText').innerText;
  });

  browser.close();

  //await mailer.sendEmail(workflowyText);

}
