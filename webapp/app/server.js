const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('express-fileupload');
const net = require('net');
const db = require("../app/models");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8081;
const PORT2 = process.env.PORT || 8082;
const IP = 'localhost';



const handleConnection = socket =>{
	console.log('Device Connected');
	socket.on('end', ()=>{
		console.log('Device Disconected')
	});
	socket.on('data', data=>{
		console.log(data.toString());
	});
}

const server = net.createServer(handleConnection);

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

//SET THE SOCKET SERVER CONFIGURATIONS
server.listen(PORT2, IP,() => {
	console.log(`Server SOCKET is running in http://${IP}:${PORT2}`);
})

//SET THE SERVICE ENDPOINTS CONFIGURATIONS
app.listen(PORT, () => {
  console.log(`Server ROUTES is running in http://${IP}:${PORT}`);
});


db.sequelize.sync().then(() => {
  	console.log("Sync db");
  }).catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  


