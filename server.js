'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var json2xls = require('json2xls');

app.use(json2xls.middleware);
app.use(bodyParser.json({ type: 'application/json', limit: '250mb' }))

app.listen(process.env.PORT || 3000, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:3000');
  });

app.post('/xlsxExport', function(req, res) {
    res.xls('data.xlsx', req.body);
});
