const db = require("../models");
const Gender = db.genders;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const gender = {
    name: req.body.name,
    sail: req.body.sail
  };

  // Save Tutorial in the database
  Gender.create(gender).then(data => {
      res.send(data);
  }).catch(err => {
	  res.status(500).send({
	    message: err.message || "Some error occurred while creating the Gender."
	  });
  	});
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Gender.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Gender.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Gender was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Gender with id=${id}. Maybe Gender was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Gender with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Gender.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Gender was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Gender with id=${id}. Maybe Gender was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Gender with id=" + id
      });
    });
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};