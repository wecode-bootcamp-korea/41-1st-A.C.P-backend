const express = require("express");
const nutrientController = require("../controllers/nutrientController");

const router = express.Router();

router.post("", nutrientController.getFilterNutrientData);

module.exports = {
  router,
};
