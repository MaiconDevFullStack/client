module.exports = app => {
  const genders = require("../resources/genderImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", genders.create);

  //Retrieve all
  router.get("/getAll", genders.findAll);
  
  //Delete selected
  router.delete("/delete/:id", genders.delete);
  
  // Update a with id
  router.put("/edit/:id", genders.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/gender', router);
};