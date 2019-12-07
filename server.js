var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);

var resp = "don't know yet";

server.listen(8080);

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/pages');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('datenight.html');
});

app.get('/yes', function(req, res){
    console.log('Yes');
	resp = "yes";
	res.render('yes.html');
});

app.get('/no', function(req, res){
    console.log('No');
	resp = "no";
	res.render('no.html');
});

app.get('/resp', function(req, res){
	res.send(resp);
});