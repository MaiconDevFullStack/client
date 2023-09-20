//variable 'express' receiving framework 'express'
const express = require('express');

//variable 'cors' receiving dependency of 'cors'
const cors = require('cors');

//variable 'app' receiving function 'express'
const app = express();

//variable 'app' calling function 'listen'
app.listen(3300, ()=>{
	console.log("server is now at port 3300");
});

//variable 'app' calling function 'use' with parameter 'origin'
app.use(cors({
	origin: '*'
}));

//variable 'app' calling function 'use' cors parameters 'methods'
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT']
}));

//variable 'bodyParser' receiving dependency 'body-parser'
const bodyParser = require("body-parser");

//variable 'app' calling function 'use' bodyParser function
app.use(bodyParser.json());

//IMPORT THE ROUTES TO USE IN ENTIRE APPLICATION
require("../app/routes/gender.routes.js")(app);
require("../app/routes/state.routes.js")(app);
require("../app/routes/sysUser.routes.js")(app);

// set port, listen for requests
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
//CITY METHODS
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


//////////////////////////////////////
//COSTUMER METHODS
/////////////////////////////////////

app.get('/costumer/getAll', (req, res)=>{
	client.query(`select c.id, 
						 c."name", 
						 c.datebirth, 
						 c.adress, 
						 json_build_object('id', g.id, 
						   				   'name', g."name", 
						   				   'sail', g.sail
						   				  ) as idgender,
						 json_build_object('id', c2.id, 
						   				   'name', c2."name", 
						   				   'state', json_build_object('id', s.id, 
						   					 						  'name', s."name", 
						   					 					      'sail', s.sail
						   					 						 )
						   				   ) as idcity
				  from costumer c 
				  left join gender g on g.id = c.idgender 
				  left join city c2 on c2.id = c.idcity
				  left join state s on s.id = c2.idstate 
				  group by c.id, g.id, c2.id, s.id
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});



app.get('/costumer/getAll/:parameter', (req, res)=>{
	
	var parameter = req.params.parameter;
	
	client.query(`select c.id, 
						 c."name", 
						 c.datebirth, 
						 c.adress, 
						 json_build_object('id', g.id, 
						   				   'name', g."name", 
						   				   'sail', g.sail
						   				  ) as idgender,
						 json_build_object('id', c2.id, 
						   				   'name', c2."name", 
						   				   'state', json_build_object('id', s.id, 
						   					 						  'name', s."name", 
						   					 					      'sail', s.sail
						   					 						 )
						   				   ) as idcity
				  from costumer c 
				  left join gender g on g.id = c.idgender 
				  left join city c2 on c2.id = c.idcity
				  left join state s on s.id = c2.idstate 
				  group by c.id, g.id, c2.id, s.id
				  order by 1 desc
				  limit 5
				  offset '${JSON.parse(parameter)}'`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/costumer/insert', (req, res)=>{
	const costumer = req.body;
	client.query(`insert into costumer(name, 
									   datebirth, 
									   adress, 
									   idgender, 
									   idcity)
							  values('${costumer.name}',
							   		 '${costumer.datebirth}',
							   		 '${costumer.adress}',
							   		 '${costumer.idgender}',
							   		 '${costumer.idcity}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/costumer/delete/:id',(req, res)=>{
	client.query(`delete from costumer
				  where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/costumer/edit/:id',(req, res)=>{
	const costumer = req.body;
	client.query(`update costumer 
				  set name = '${costumer.name}', 
				  	  datebirth = '${costumer.datebirth}',
				 	  adress = '${costumer.adress}',
				 	  idgender = '${costumer.idgender}',
				 	  idcity = '${costumer.idcity}'
				  where id = ${costumer.id}`, (err, result)=>{
		if(!err){
			res.send(`Edition was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});
*/
