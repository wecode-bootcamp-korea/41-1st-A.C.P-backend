const express = require("express");
const potsController = require("../controllers/potsController");

const router = express.Router();

router.post(":/potsId", potsController.potsDetails);

module.exports = {
  router,
};
