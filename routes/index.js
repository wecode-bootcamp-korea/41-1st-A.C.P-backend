const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");
const cartsRouter = require("../routes/cartsRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);
router.use("/carts", cartsRouter.router);

module.exports = router;
