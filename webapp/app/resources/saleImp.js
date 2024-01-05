const db = require("../models");
const Sale = db.sales;
const Op = db.Sequelize.Op;


// Create and Save new
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const sale = {
    value: req.body.value,
    saleDate: req.body.saleDate,
    product: req.body.product,
    productId: req.body.product.id,
    //costumer: req.body.costumer,
    //costumerId: req.body.costumer.id
  };

  // Save in the database
  Sale.create(sale).then(data => {
      res.send(data);
  }).catch(err => {
	  res.status(500).send({
	    message: err.message || "Some error occurred while creating."
	  });
  	});
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  Sale.findAll({
	  include: ['product', 'service']
  }).then(data => {
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

  Sale.update(req.body, {
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

  Sale.destroy({
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