const PORT = 3000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotty = require('dotty');

const config = require('./config');
const SendEmail = require('./Send_Email');

// support parsing of application/json type post data
app.use(bodyParser.json());
// //support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API :: FxHanuman.com');
    console.log("@ Home");
    // res.redirect('https://fxhanuman.com/');
})

app.post('/api/sendmail/:typemail', Authorization, validSendEmail, async (req, res) => {
    console.log("@ /api/sendmail/" + req.params.typemail);
    res.setHeader('content-type', 'application/json');
    res.json(await SendEmail.Main(req));
})

function validSendEmail(req, res, next) {
    console.log(req.body);
    if ((dotty.exists(req, "body.email") && dotty.exists(req, "body.url"))) {
        next();
    }
    else {
        res.json({
            status: config.STATUS.REJECT,
            result: "Data Invalid"
        });
    }
}

function Authorization(req, res, next) {
    console.log(req.body);
    if (req.body.hnm == "7895") {
        next();
    }
    else {
        res.json({
            status: config.STATUS.REJECT,
            result: "Fxhanuman Authorization failed."
        });
    }
}

app.listen(PORT, () => {
    console.log(`The server is running!, listening on port: ${PORT}`);
})