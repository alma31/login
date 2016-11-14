var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var nom = "alma";
var mdp = "alma31";

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('p/', function (req, res) {
  res.send('Hello World!')
})

app.post('/login', function(req,res){
	var post = req.body;
	if (post.username == nom && post.password == mdp){
     res.sendFile(__dirname + '/public/connecter.html');
	}
    else { console.log("sa marche pas")}
});



app.listen(6700, function () {
  console.log('sa marche sur le port 6700')
})