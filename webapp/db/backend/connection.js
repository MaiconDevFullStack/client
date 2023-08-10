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

module.exports = client;

const Gender = sequelize.define('gender', {
	/*
	id: {
		type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoincrement: true
	},
	*/
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

const State = sequelize.define('state', {
	/*
	id: {
		type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoincrement: true
	},
	*/
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

const City = sequelize.define('city', {
	/*
	id: {
		type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoincrement: true
	},
	*/
	name : {
		type: Sequelize.DataTypes.STRING, allowNull : false
	}
},
{
	freezeTableName: true, 
	timestamps: false		
});

City.belongsTo(State, {
	constraint: true,
	foreignKey: 'idState'
});

City.sync().then((data)=>{
	console.log('table and model sync successful');
}).catch((err)=>{
	console.log(err);
});







