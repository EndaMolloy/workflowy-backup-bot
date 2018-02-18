const nodemailer = require("nodemailer");
const settings = require("./settings");

const transporter = nodemailer.createTransport({
  service: "Mailgun",
  auth: {
    user: settings.MAILGUN_USER,
    pass: settings.MAILGUN_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
})

module.exports = {
  sendEmail(text){

    let mailOptions = {
        from: 'workflowy-backup-bot', // sender address
        to: settings.WORKFLOWY_USERNAME, // list of receivers
        subject: 'Auto workflowy backup', // Subject line
        text: text // plain text body
    };

    return transporter.sendMail(mailOptions, (err)=> {
      console.log(err);
    })
  }
}
