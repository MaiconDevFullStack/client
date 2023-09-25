module.exports = app => {
  const services = require("../resources/serviceImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", services.create);

  //Retrieve all
  router.get("/getAll", services.findAll);
  
  //Delete selected
  router.delete("/delete/:id", services.delete);
  
  // Update a with id
  router.put("/edit/:id", services.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/service', router);
};