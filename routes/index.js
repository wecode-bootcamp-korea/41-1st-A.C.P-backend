const express = require("express");
const router = express.Router();

const userRouter = require("../routes/userRouter");
const cartsRouter = require("../routes/cartsRouter");

router.use("/users", userRouter.router);
router.user("/carts", cartsRouter.router);

module.exports = router;
