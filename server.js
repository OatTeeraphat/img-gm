var express      = require('express');
var morgan       = require('morgan');
var http         = require('http');
var processImage = require('express-processimage');
var app          = express();

var port     = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(processImage('public'));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('port', port);

app.get('/', function(req, res){
    res.render('map_new.jpg');
});

var server = http.createServer(app);

server.listen(port);
console.log('good@ localhost:' + port);