const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.get("/:plantId", plantController.getPlantInfo);
router.get("", plantController.plantListFilterData);
router.get("/main", plantController.plantsList);

module.exports = {
  router,
};
