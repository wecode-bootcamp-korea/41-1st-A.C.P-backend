const express = require("express");
const listfilterController = require("../controllers/listfilterController");

const router = express.Router();

router.post("/filter", listfilterController.listfilterData);

module.exports = {
  router,
};
