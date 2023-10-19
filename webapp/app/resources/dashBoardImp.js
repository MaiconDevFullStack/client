const db = require("../models");
const DashBoard = db.dashBoards;
const Op = db.Sequelize.Op;



// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  else{
	  // Create a Tutorial
	  const dashBoard = req.files;
	  				/*
	  				{
		  				name: req.files.name, 
		  				file: req.files.data
		  			}  
					*/
	  console.log(dashBoard);
	  
	  res.status(200).send({
	  	message: 'success' 
	  });	  
  
  }

  // Save Tutorial in the database
  /*
  DashBoard.create(dashBoard).then(data => {
      res.send(data);
  }).catch(err => {
	  res.status(500).send({
	    message: err.message || "Some error occurred while creating the DashBoard."
	  });
  	});
  	*/
};






// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  DashBoard.findAll()
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

  DashBoard.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Gender was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update DashBoard with id=${id}. Maybe DashBoard was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating DashBoard with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DashBoard.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Gender was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete DashBoard with id=${id}. Maybe DashBoard was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete DashBoard with id=" + id
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