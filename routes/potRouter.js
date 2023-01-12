const express = require("express");
const potController = require("../controllers/potController");

const router = express.Router();

router.get("", potController.potsListFilterData);

module.exports = {
  router,
};
