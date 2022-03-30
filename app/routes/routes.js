const express = require('express');
const router = express.Router();

module.exports = app => {
  const {create} = require("../controllers/controller.js");
console.log('create');
  router.post("/login", create);

  app.use('/api/admin', router);
};
