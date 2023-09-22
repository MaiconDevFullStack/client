const db = require("../models");
const Costumer = db.costumers;
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
  const costumer = {
    name: req.body.name,
    datebirth: req.body.datebirth,
    adress: req.body.adress,
    gender: req.body.gender,
    city: req.body.city,
    genderId: req.body.gender.id,
    cityId: req.body.city.id
  };

  // Save in the database
  Costumer.create(costumer).then(data => {
      res.send(data);
  }).catch(err => {
	  res.status(500).send({
	    message: err.message || "Some error occurred while creating."
	  });
  	});
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  Costumer.findAll({
	  include: ['city', 'gender']
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

  Costumer.update(req.body, {
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

  Costumer.destroy({
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