const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("", orderController.insertData);

module.exports = {
  router,
};
