const express = require("express");
const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

router.post("", loginRequired, cartController.createCart);
router.get("", cartController.getCartList);
router.delete("", cartController.deleteCart);

module.exports = {
  router,
};
