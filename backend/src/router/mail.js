
var nodemailer = require('nodemailer');

const emailMsg = (emailData) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'demoprojectnode@gmail.com',
      pass: 'demo@@@123'
    }
  });

  var mailOptions = {
    from: 'demoprojectnode@gmail.com',
    to: emailData,
    subject: 'Welcome to shadimubarak app',
    text: 'now find your perfect match here!! swipe right and get aperfect one for you!!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = emailMsg;