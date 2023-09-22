module.exports = app => {
  const costumers = require("../resources/costumerImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", costumers.create);

  //Retrieve all
  router.get("/getAll", costumers.findAll);
  
  //Delete selected
  router.delete("/delete/:id", costumers.delete);
  
  // Update a with id
  router.put("/edit/:id", costumers.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/costumer', router);
};