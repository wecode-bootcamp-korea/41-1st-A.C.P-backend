const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.get("", plantController.plantListFilterData);

module.exports = {
  router,
};
