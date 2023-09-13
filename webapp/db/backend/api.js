const client = require('./connection.js')
const express = require('express');
const app = express();
const cors = require('cors');

//const {City, State} = require('./connection.js')


app.listen(3300, ()=>{
	console.log("server is now at port 3300");
})

app.use(cors({
	origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT']
}));

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


//////////////////////////////////////
//STATE METHODS
/////////////////////////////////////

app.get('/state/getAll', (req, res)=>{
	client.query(`select * from state 
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.get('/state/getById/:id', (req, res)=>{
	client.query(`select * from state s
				  where s.id = ${req.params.id} 
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/state/insert', (req, res)=>{
	const state = req.body;
	client.query(`insert into state(name,
								    sail)
							  values('${state.name}',
							  		 '${state.sail}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/state/delete/:id',(req, res)=>{
	client.query(`delete from state
				  where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/state/edit/:id',(req, res)=>{
	let state = req.body;
	client.query(`update state 
				  set name = '${state.name}', 
				  	  sail = '${state.sail}' 
				  where id = ${state.id}`, (err, result)=>{
		if(!err){
			res.send(`Edition was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});





//////////////////////////////////////
//CITY METHODS
/////////////////////////////////////

app.get('/city/getAll', (req, res)=>{
	
	client.query(`select * from city
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});


app.get('/city/getAllForPrincipalTable', async (req, res)=>{
	
	/*
	///////IN CASE OF [{}] LIST OF OBJECTS
	
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
//SYSUSER METHODS
/////////////////////////////////////

app.get('/sysuser/getAll', (req, res)=>{
	client.query(`select * from sysuser
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/sysuser/insert', (req, res)=>{
	const user = req.body;
	client.query(`insert into sysuser(name,
									  login, 
									  pass)
							  values('${user.name}',
							  		 '${user.login}',
							  		 '${user.pass}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/sysuser/delete/:id',(req, res)=>{
	client.query(`delete from sysuser
				  where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/sysuser/edit/:id',(req, res)=>{
	let user = req.body;
	client.query(`update sysuser 
				  set name = '${user.name}', 
				  	  login = '${user.login}',
				  	  pass =  '${user.pass}'
				  where id = ${user.id}`, (err, result)=>{
		if(!err){
			res.send(`Edition was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});





//////////////////////////////////////
//GENDER METHODS
/////////////////////////////////////

app.get('/gender/getAll', (req, res)=>{
	client.query(`select * from gender 
				  order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/gender/insert', (req, res)=>{
	const gender = req.body;
	client.query(`insert into gender(name, 
									 sail)
							  values('${gender.name}',
							  		 '${gender.sail}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/gender/delete/:id',(req, res)=>{
	client.query(`delete from gender
				  where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/gender/edit/:id',(req, res)=>{
	const gender = req.body;
	client.query(`update gender 
				  set name = '${gender.name}', 
				 	  sail = '${gender.sail}'
				  where id = ${gender.id}`, (err, result)=>{
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
/*
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
*/

app.get('/costumer/getAll/:parameter', (req, res)=>{
	
	var parameter = req.params.parameter;
	
	console.log(parameter);
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