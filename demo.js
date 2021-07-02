var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'riteshshende616@gmail.com',
    pass: 'ritesh@616'
  }
});

var mailOptions = {
  from: 'riteshshende616@gmail.com',
  to: 'riteshshende616@gmail.com',
  subject: 'test node mail',
  text: `Hello everyone
                        This is Ritesh
                        
                        
                        
                                         
                        
                        
       Hi, i got it.     It Works!      Received your mail. `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email has been sent: ' + info.response);
  }
});