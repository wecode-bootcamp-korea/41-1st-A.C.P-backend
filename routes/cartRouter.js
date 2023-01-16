const express = require("express");
const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

router.post("", loginRequired, cartController.createCart);
router.get("", loginRequired, cartController.getCartList);
router.delete("", loginRequired, cartController.deleteCart);

module.exports = {
  router,
};
