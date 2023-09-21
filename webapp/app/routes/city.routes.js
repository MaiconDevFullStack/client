module.exports = app => {
  const cities = require("../resources/cityImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", cities.create);

  //Retrieve all
  router.get("/getAll", cities.findAll);
  
  //Delete selected
  router.delete("/delete/:id", cities.delete);
  
  // Update a with id
  router.put("/edit/:id", cities.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/city', router);
};