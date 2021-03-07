
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
var path = require('path');


const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    console.log(req.body.html + "sami")
    pdf.create(pdfTemplate(req.body.html), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));