const app = require('express');
const http = require('http').createServer(app);

const io = require('socket.io')(http);

http.listen(8082, function(){
	console.log('Listening on port: 8082');
});