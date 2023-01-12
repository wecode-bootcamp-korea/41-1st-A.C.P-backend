const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.get("/main", plantController.plantsList);

module.exports = {
  router,
};
