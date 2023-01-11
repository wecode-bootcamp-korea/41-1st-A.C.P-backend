const express = require("express");
const potController = require("../controllers/potController");

const router = express.Router();

router.post("", potController.potsListFilterData);

module.exports = {
  router,
};
