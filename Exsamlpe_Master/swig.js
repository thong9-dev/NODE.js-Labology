const express = require('express')
const app = express()
const port = 4000

// ---------------------
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/swig', function (req, res) {

    res.render('index', {
        title: 'This is title of Swig Template',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        names: ['John Doe', 'Jane Doe', 'Jane Dane']
    });

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))