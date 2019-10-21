const nodemailer = require('nodemailer');

// config สำหรับของ gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lapukdee@gmail.com', // your email
        pass: 'vwsiibnxsfprtsri' // your email password
    }
});
// config สำหรับของ outlook
// const transporter = nodemailer.createTransport({
//     service: 'hotmail',
//     auth: {
//         user: 'yourmail@hotmail.com', // your email
//         pass: 'password' // your email password
//     }
// });


let mailOptions = {
    from: 'lapukdee@gmail.com',                   // sender
    to: 'lapukdee.fx@gmail.com',                // list of receivers
    subject: 'Hello from sender Node.js Mail',      // Mail subject
    html: ' <td width="100%" align="center" bgcolor="#bdbcba" style="padding:10px 10px 10px 10px">'
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log("Error")
        console.log(err)
    }
    else {

        console.log("Success")
        console.log(info);
    }
});