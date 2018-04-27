// socket to communation between server and client
var socket = io.connect();

// when receive call from socket display on respective user textarea
socket.on('speech', function(data) {
  var message = data.msg;
  if(message) {
    document.getElementById('results').innerHTML = message;
  }
  document.getElementById('results').scrollTop = document.getElementById('results').scrollHeight;
  console.log('TESTE: ' + message);
});