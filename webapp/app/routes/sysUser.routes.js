module.exports = app => {
  const sysUsers = require("../resources/sysUserImp.js");
  var router = require("express").Router();

  //Insert
  router.post("/insert", sysUsers.create);

  //Retrieve all
  router.get("/getAll", sysUsers.findAll);
  
  //Delete selected
  router.delete("/delete/:id", sysUsers.delete);
  
  // Update a with id
  router.put("/edit/:id", sysUsers.update);
/*
  // Retrieve all by some condition
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", tutorials.findOne);

  // Delete all
  router.delete("/", tutorials.deleteAll);
*/
  app.use('/sysUser', router);
};