const express = require("express");
const router = express.Router();

const potsRouter = require("../routes/potsRouter");

router.use("/pots", potsRouter.router);

module.exports = router;
