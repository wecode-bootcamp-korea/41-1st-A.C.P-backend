const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signin", userController.signin);

module.exports = {
  router,
};
