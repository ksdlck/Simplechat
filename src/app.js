(function(){
  var conf, http, express, socketio, app, srv, io;
  conf = require('./conf');
  http = require('http');
  express = require('express');
  socketio = require('socket.io');
  app = express();
  srv = require('http').createServer(app);
  app.configure(function(){
    app.use(express['static'](__dirname + "/pub"));
  });
  io = socketio.listen(srv);
  io.sockets.on('connection', function(sock){
    console.log("Yo, got a connection, man!");
  });
  srv.listen(conf.port, conf.addr);
}).call(this);
