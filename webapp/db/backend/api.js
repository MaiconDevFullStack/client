const client = require('./connection.js')
const express = require('express');

const app = express();
const cors = require('cors');


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
	client.query(`select * from state order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/state/insert', (req, res)=>{
	const state = req.body;
	client.query(`insert into state(name, sail)values('${state.name}','${state.sail}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/state/delete/:id',(req, res)=>{
	client.query(`delete from state where id=${req.params.id}`, (err, result)=>{
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
//STATE METHODS
/////////////////////////////////////

app.get('/city/getAll', (req, res)=>{
	client.query(`select * from city order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/city/insert', (req, res)=>{
	const city = req.body;
	client.query(`insert into city(name, state)values('${city.name}','${city.state}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/city/delete/:id',(req, res)=>{
	client.query(`delete from city where id=${req.params.id}`, (err, result)=>{
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
				  state = '${city.state}' 
				  where id = ${city.id}`, (err, result)=>{
		if(!err){
			res.send(`Edition was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});




//////////////////////////////////////
//USER METHODS
/////////////////////////////////////
app.get('/user/getAll', (req, res)=>{
	client.query(`select * from user_sys order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/user/insert', (req, res)=>{
	const user = req.body;
	client.query(`insert into user_sys(name, login, pass)values('${user.name}','${user.login}','${user.pass}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/user/delete/:id',(req, res)=>{
	client.query(`delete from user_sys where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/user/edit/:id',(req, res)=>{
	let user = req.body;
	client.query(`update user_sys 
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
//CITY METHODS
/////////////////////////////////////
app.get('/city/getAll', (req, res)=>{
	client.query(`select * from city order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/city/insert', (req, res)=>{
	const city = req.body;
	client.query(`insert into city(name, login, pass)values('${user.name}','${user.login}','${user.pass}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/city/delete/:id',(req, res)=>{
	client.query(`delete from city where id=${req.params.id}`, (err, result)=>{
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
	client.query(`select * from gender order by 1 desc`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.post('/gender/insert', (req, res)=>{
	const gender = req.body;
	client.query(`insert into gender(name, sail)values('${gender.name}','${gender.sail}')`,(err, result)=>{
		if(!err){
			res.send('Insertion was successful')
		}
		else {console.log(err.message)}
	});
	client.end;
});


app.delete('/gender/delete/:id',(req, res)=>{
	client.query(`delete from gender where id=${req.params.id}`, (err, result)=>{
		if(!err){
			res.send(`Deletion was successful`);
		}
		else{console.log(err.message)}
	});
	client.end;
});

app.put('/gender/edit/:id',(req, res)=>{
	let gender = req.body;
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