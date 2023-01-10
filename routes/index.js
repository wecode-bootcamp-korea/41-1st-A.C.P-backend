const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");
const orderRouter = require("./orderRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);
router.use("/order", orderRouter.router);

module.exports = router;
