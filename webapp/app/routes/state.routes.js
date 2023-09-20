module.exports = app => {
  const states = require("../resources/stateImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", states.create);

  //Retrieve all
  router.get("/getAll", states.findAll);
  
  //Delete selected
  router.delete("/delete/:id", states.delete);
  
  // Update a with id
  router.put("/edit/:id", states.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/state', router);
};