const express = require("express");
const nutrientController = require("../controllers/nutrientController");

const router = express.Router();

router.post("/:nutrientId", nutrientController.getNutrientInfo);

module.exports = {
  router,
};
