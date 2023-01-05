const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.post("/:plantId", plantController.plantsDetails);

module.exports = {
  router,
};
