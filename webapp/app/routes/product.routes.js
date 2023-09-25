module.exports = app => {
  const products = require("../resources/productImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", products.create);

  //Retrieve all
  router.get("/getAll", products.findAll);
  
  //Delete selected
  router.delete("/delete/:id", products.delete);
  
  // Update a with id
  router.put("/edit/:id", products.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/product', router);
};