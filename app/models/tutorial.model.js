const sql = require("./db.js");

// constructor
const Tutorial = function(tutorial) {
  this.id = tutorial.id;
  this.adminEmail = tutorial.adminEmail;
  this.adminPass = tutorial.adminPass;
};

Tutorial.create = (title, result) => {
  sql.query(`SELECT * FROM admins where adminEmail = '${title}'`, (err, res) => {
    console.log(res);
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res[0]);
  });
};


module.exports = Tutorial;
