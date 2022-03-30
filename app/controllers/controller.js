const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log('req', req.body);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const title = req.body.adminEmail;
  console.log(title);
  // Save Tutorial in the database
  Tutorial.create(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else {
      
      res.send(data);
    }
  });
};
