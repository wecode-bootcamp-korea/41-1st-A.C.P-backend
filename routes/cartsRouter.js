const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("", cartController.getCartList);
router.delete("", cartController.deleteCart);

module.exports = {
  router,
};
