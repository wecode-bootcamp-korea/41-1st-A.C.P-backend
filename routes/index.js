const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");
const nutrientRouter = require("./nutrientRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);
router.use("/nutrients", nutrientRouter.router);

module.exports = router;
