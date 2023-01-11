const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.post("", plantController.listfilterData);

module.exports = {
  router,
};
