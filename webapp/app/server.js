const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('express-fileupload');
const db = require("../app/models");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8081;
const PORT2 = 8082;
const IP = 'localhost';

var net = require('net');

net.createServer(function(sock) {
 console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
  sock.on('data', function(data) {
    console.log(sock.remoteAddress + ': ' + data);
    sock.write(data);
  });
 sock.on('close', function(data) {
   console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
 });

}).listen(PORT2, IP);

console.log('Server listening on ' + IP +':'+ PORT2);

app.use(upload());

app.use(cors({
	origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT']
}));

app.use(bodyParser.json());

//IMPORT THE ROUTES TO USE IN ENTIRE APPLICATION
require("../app/routes/gender.routes.js")(app);
require("../app/routes/state.routes.js")(app);
require("../app/routes/sysUser.routes.js")(app);
require("../app/routes/city.routes.js")(app);
require("../app/routes/costumer.routes.js")(app);
require("../app/routes/product.routes.js")(app);
require("../app/routes/service.routes.js")(app);
require("../app/routes/sale.routes.js")(app);
require("../app/routes/dashBoard.routes")(app);


//SET THE SERVICE ENDPOINTS CONFIGURATIONS
app.listen(PORT, () => {
  console.log(`Server ROUTES is running in http://${IP}:${PORT}`);
});


db.sequelize.sync().then(() => {
  	console.log("Sync db");
  }).catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  


