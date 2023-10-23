const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const upload = require('express-fileupload');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8082});

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

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("../app/models");

db.sequelize.sync().then(() => {
  	console.log("Sync db");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

