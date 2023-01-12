const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const potsRouter = require("../routes/potsRouter");
const cartsRouter = require("../routes/cartsRouter");
const orderRouter = require("./orderRouter");
const plantRouter = require("./plantRouter");
const nutrientRouter = require("./nutrientRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);
router.use("/carts", cartsRouter.router);
router.use("/pots", potsRouter.router);
router.use("/nutrients", nutrientRouter.router);
router.use("/orders", orderRouter.router);

module.exports = router;
