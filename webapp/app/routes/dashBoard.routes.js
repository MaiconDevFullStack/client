module.exports = app => {
  const dashBoards = require("../resources/dashBoardImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", dashBoards.create);

  //Retrieve all
  router.get("/getAll", dashBoards.findAll);
  
  //Delete selected
  router.delete("/delete/:id", dashBoards.delete);
  
  // Update a with id
  router.put("/edit/:id", dashBoards.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/dashBoard', router);
};