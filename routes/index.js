const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const cartRouter = require("./cartsRouter");
const orderRouter = require("./orderRouter");
const plantRouter = require("./plantRouter");
const nutrientRouter = require("./nutrientRouter");
const potRouter = require("./potRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);
router.use("/carts", cartRouter.router);
router.use("/pots", potRouter.router);
router.use("/nutrients", nutrientRouter.router);
router.use("/orders", orderRouter.router);

module.exports = router;
