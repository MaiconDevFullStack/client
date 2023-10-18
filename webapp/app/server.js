const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('express-fileupload');


app.use(upload());

app.listen(3300, ()=>{
	console.log("server is now at port 3300");
});

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

/*


//////////////////////////////////////
//CITY METHODS  ///  EXEMPLES QUERIES
/////////////////////////////////////

app.get('/city/getAll', (req, res)=>{
	client.query(`select * from city c
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.get('/city/getAllForPrincipalTable', async (req, res) =>{
*/	
	
	///////IN CASE OF [{}] LIST OF OBJECTS
	/*
	SELECT c.id AS cityId, c.name AS cityName,
	         json_agg(
	           json_build_object(
	             'id', s.id,
	             'name', s.name
	           )
	         ) AS states
	  FROM City c
	  LEFT JOIN State s ON s.id = c.idstate 
	  GROUP BY c.id
	*/
	/*
	client.query(`SELECT c.id, c.name,
				       json_build_object(
				         'id', s.id,
				         'name', s.name,
				         'sail', s.sail
				       )AS idstate
				  FROM City c
				  LEFT JOIN State s ON s.id = c.idstate 
				  GROUP BY c.id, s.id`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
	

	client.query(`SELECT *
				  FROM City c
				  LEFT JOIN State s ON s.id = c.idstate 
				  GROUP BY c.id, s.id`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
	
});



app.get('/city/getById/:id', (req, res)=>{
	client.query(`select * from city c
				  where c.id = ${req.params.id} 
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/city/insert', (req, res)=>{
	var city = req.body;
	client.query(`insert into city(name,
							       idstate)
							  values('${city.name}',
							  		 '${city.idstate}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/city/delete/:id',(req, res)=>{
	client.query(`delete from city
				  where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/city/edit/:id',(req, res)=>{
	let city = req.body;
	client.query(`update city 
				  set name = '${city.name}', 
				  	  idstate = '${city.idstate}' 
				  where id = ${city.id}`, (err, result)=>{
		if(!err){
			res.send(`Edition was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});
*/
