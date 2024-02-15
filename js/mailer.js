const nodemailer = require('nodemailer');

// Create a transporter object with Gmail and OAuth2 credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'youremail@gmail.com',
        pass: 'yourpassword',
        clientId: 'your_client_id',
        clientSecret: 'your_client_secret',
        refreshToken: 'your_refresh_token'
    }
});

// Create a mailOptions object with your email details
const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'faroukayadi1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

// Use the transporter.sendMail method to send the email
function sendMail(){
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
