const express = require("express");
const nutrientController = require("../controllers/nutrientController");

const router = express.Router();

router.get("/:nutrientId", nutrientController.getNutrientInfo);
router.get("", nutrientController.nutrientsListFilterData);

module.exports = {
  router,
};
