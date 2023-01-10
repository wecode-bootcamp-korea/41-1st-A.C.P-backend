const express = require("express");
const router = express.Router();

const cartsRouter = require("../routes/cartsRouter");

router.use("/carts", cartsRouter.router);

module.exports = router;
