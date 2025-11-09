var nodemailer = require('nodemailer');


const userMailsender=(uname, uemail, upass)=>{

    
   var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: "jaydeshmukh0010@gmail.com", // Your email address
    pass: "mthk oluq fmlq hwf", // Your email password or app-specific password
  }
});

 var mailOptions = {
      from: 'jaydeshmukh0010@gmail.com',
      to: uemail,
      subject: 'Sending Email by Admin using Node.js Task Management System ',
      text:`Dear :  ${uname}\n Your Password :  ${upass}\n You can Login With Email and this Password`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error); 
      } else {
        console.log('Email Successfully sent: ' + info.response);
        res.send(info.response);
      }
    });
}

module.exports={
     userMailsender
}