const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('express-fileupload');
const net = require('net');

app.use(upload());

app.use(cors({
	origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT']
}));

const bodyParser = require("body-parser");

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


const handleConnection = socket =>{
	console.log('Connection Socket is Open');
	socket.on('end', ()=>{
		console.log('Connection Socket are closed')
	});
	socket.on('data', data=>{
		console.log(data.toString());
	});
}

const server = net.createServer(handleConnection);
server.listen(8082, 'localhost');

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("../app/models");

db.sequelize.sync().then(() => {
  	console.log("Sync db");
  }).catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  


