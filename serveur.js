var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('p/', function (req, res) {
  res.send('Hello World!')
})


app.listen(6700, function () {
  console.log('sa marche sur le port 6700')
})