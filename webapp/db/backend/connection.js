const { Client } = require('pg');

const client = new Client({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "mfc",
	database: "client"
})

module.exports = client;