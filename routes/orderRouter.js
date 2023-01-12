const express = require("express");
const orderController = require("../controllers/orderController");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

router.post("", loginRequired, orderController.orderListFilterData);

module.exports = {
  router,
};
