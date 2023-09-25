module.exports = app => {
  const sales = require("../resources/saleImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", sales.create);

  //Retrieve all
  router.get("/getAll", sales.findAll);
  
  //Delete selected
  router.delete("/delete/:id", sales.delete);
  
  // Update a with id
  router.put("/edit/:id", sales.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/sale', router);
};