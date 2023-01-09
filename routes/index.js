const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const orderRouter = require("./orderRouter");

router.use("/users", userRouter.router);
router.use("/order", orderRouter.router);

module.exports = router;
