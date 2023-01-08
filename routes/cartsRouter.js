const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("", cartController.insertData);

module.exports = {
  router,
};
