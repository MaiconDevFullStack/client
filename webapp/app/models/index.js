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
db.costumers = require("./costumer.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.services = require("./service.model.js")(sequelize, Sequelize);
db.sales = require("./sale.model.js")(sequelize, Sequelize);


//RELATIONS BETWEEN MODELS
db.cities.belongsTo(db.states, {
  foreignKey: 'stateId',
  as: "state",
});

//RELATIONS BETWEEN MODELS
db.costumers.belongsTo(db.cities, {
  foreignKey: 'cityId',
  as: "city",
});

db.costumers.belongsTo(db.genders, {
  foreignKey: 'genderId',
  as: "gender",
});


//RELATIONS BETWEEN MODELS
db.products.belongsToMany(db.sales, { through: 'sale_product' });
db.sales.belongsToMany(db.products, { through: 'sale_product' });

db.services.belongsToMany(db.sales, { through: 'sale_service' });
db.sales.belongsToMany(db.services, { through: 'sale_service' });


module.exports = db;