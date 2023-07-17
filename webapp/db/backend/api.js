const client = require('./connection.js')
const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors({
	origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PATCH']
}));

client.connect();

app.post('/create', (req, res)=>{
	
	client.query(`create table product
				 (id serial primary key,
				  name varchar(40),
				  costPrice numeric(4),
				  costSale numeric(4),
				  expDate timestamp)`, (err, result)=>{
		if(err){
			throw err;
		}
		res.status(201).send(`Created product`);
	});
	
	client.query(`create table user
				 (id serial primary key, 
				  name varchar(40), 
				  login varchar(40), 
				  password varchar(40))`, (err, result)=>{
		if(err){
			throw err;
		}
		res.status(201).send(`Created user`);
	});
});

app.get('/retrieveProduct', (req, res)=>{
	
	client.query(`select * from product`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.get('/retrieveUser', (req, res)=>{
	
	client.query(`select * from usuario`, (err, result)=>{
		if(!err){
			res.send(result.rows);
		}	
	});
});

app.listen(3300, ()=>{
	console.log("server is now at port 3300");
});