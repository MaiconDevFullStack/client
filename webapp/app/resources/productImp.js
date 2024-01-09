const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;


// Create and Save new
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const product = {
    name: req.body.name,
    codeBar: req.body.codeBar,
    description: req.body.description,
    costPrice: req.body.costPrice,
    costSale: req.body.costSale,
    expDate: req.body.expDate,
    type: req.body.type
  };

  // Save in the database
  Product.create(product).then(data => {
      res.send(data);
  }).catch(err => {
	  res.status(500).send({
	    message: err.message || "Some error occurred while creating."
	  });
  	});
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  Product.findAll().then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};

// Update by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
};

// Delete  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}. Maybe it was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete with id=" + id
      });
    });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all for parameter
exports.findAllPublished = (req, res) => {
  
};

// Find a single with an id
exports.findOne = (req, res) => {
  
};