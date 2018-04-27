// set up
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');

// set up our express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); // set up ejs for templating
app.use(express.static('app'));
app.use('/css', express.static(__dirname + '/app/css'));
app.use('/img', express.static(__dirname + '/app/img'));
app.use('/js', express.static(__dirname + '/app/js'));

// routes
require('./app/routes.js')(app);

// launch
var server = app.listen(port, () => {
    console.log('Listening on port ' + port);
});

// socket.io to communication between the users
var io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on('speech', function(data) {
      io.sockets.emit('speech', {
        msg: data.msg
      });
    });
  });