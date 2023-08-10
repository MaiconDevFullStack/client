const { Client } = require('pg');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('client', 'postgres', 'mfc',{
	dialect: 'postgres'
});

async function myFunction(){
	await sequelize.authenticate();
	console.log("connection successful");
}

myFunction();

const client = new Client({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "mfc",
	database: "client"
});


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
State.hasMany(City,{
	constraint: true,
	foreignKey: 'idstate'
});

City.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log(err);
});



//////////////////////////////////////
//CREATE TABLE CITY
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





