const express = require("express");
const plantController = require("../controllers/plantController");

const router = express.Router();

router.get("/main", plantController.plantsList);
router.get("/:plantId", plantController.getPlantInfo);
router.get("", plantController.plantListFilterData);

module.exports = {
  router,
};
