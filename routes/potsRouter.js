const express = require("express");
const potsController = require("../controllers/potsController");

const router = express.Router();

router.post("/:potId", potsController.getPotInfo);

module.exports = {
  router,
};
