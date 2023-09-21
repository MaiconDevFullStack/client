const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//receive the models
db.genders = require("./gender.model.js")(sequelize, Sequelize);
db.states = require("./state.model.js")(sequelize, Sequelize);
db.sysUsers = require("./sysUser.model.js")(sequelize, Sequelize);
db.cities = require("./city.model.js")(sequelize, Sequelize);


//RELATIONS BETWEEN MODELS
db.states.hasMany(db.cities, { as: "cities" });
db.cities.belongsTo(db.states, {
  constraint: true,
  as: "state",
});

module.exports = db;