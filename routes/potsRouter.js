const express = require("express");
const potController = require("../controllers/potController");

const router = express.Router();

router.post("/:potId", potController.getPotInfo);

module.exports = {
  router,
};
