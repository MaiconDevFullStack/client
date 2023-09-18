const { Sequelize } = require('sequelize');
const { Client } = require('pg');

const sequelize = new Sequelize('client', 'postgres', 'mfc', {
  	host: 'localhost',
  	dialect: 'postgres'
});

const client = new Client({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "mfc",
	database: "client"
});

async function myFunction(){
	await sequelize.authenticate();
	console.log("connection successful");
}


myFunction();

//////////////////////////////////////
//CREATE TABLE GENDER
/////////////////////////////////////
const Gender = sequelize.define('gender', {
	
	name : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	},
	sail: {
		type: Sequelize.DataTypes.STRING, allowNull : false
	}
},
{
	freezeTableName: true, 
	timestamps: false		
});

Gender.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log('error sync');
});



//////////////////////////////////////
//CREATE TABLE STATE
/////////////////////////////////////
const State = sequelize.define('state', {
	
	name : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	},
	sail: {
		type: Sequelize.DataTypes.STRING, allowNull : false
	}
},
{
	freezeTableName: true, 
	timestamps: false		
});

State.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log('error sync');
});


//////////////////////////////////////
//CREATE TABLE CITY
/////////////////////////////////////
const City = sequelize.define('city', {
	
	name : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	}
},
{
	freezeTableName: true, 
	timestamps: false		
});


////////////////
///RELATIONS
////////////////
City.State = City.belongsTo(State,{
	constraint: true,
	foreignKey: 'idstate'
});

City.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log(err);
});




//////////////////////////////////////
//CREATE TABLE SYSUSER
/////////////////////////////////////
const SysUser = sequelize.define('sysuser', {
	
	name : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	},
	login :{
		type: Sequelize.DataTypes.STRING, allowNull : false
	},
	pass : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	}
},
{
	freezeTableName: true, 
	timestamps: false		
});

SysUser.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log(err);
});

const users = SysUser.findAll();

if(users){
	SysUser.create({
		name: 'System',
		login: 'sys',
		pass: '123'
	});
}




//////////////////////////////////////
//CREATE TABLE COSTUMER
/////////////////////////////////////
const Costumer = sequelize.define('costumer', {
	
	name : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	},
	datebirth : {
		type: "TIMESTAMP", allowNull : false
	},
	adress : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	}
},
{
	freezeTableName: true, 
	timestamps: false		
});

////////////////
///RELATIONS
////////////////
Costumer.belongsTo(Gender,{
	constraint: true,
	foreignKey: 'idgender'
});

Costumer.belongsTo(City,{
	constraint: true,
	foreignKey: 'idcity'
});

Costumer.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log(err);
});

//////////////////////////////////////
//EXPORT MODULE TO ALL APPLICATION
/////////////////////////////////////
module.exports = client;






