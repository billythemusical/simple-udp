// https://www.hacksparrow.com/nodejs/udp-server-and-client-example.html

var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

// Messages must be a string
server.on('message', function(message, remote) {
  console.log(remote.address + ':' + remote.port +' - ' + message);

  // forward the message.. the send method can be use to send a packet
  server.send(message, '44444', '127.0.0.1') // message, port, host IP
});

server.bind(PORT, HOST);
