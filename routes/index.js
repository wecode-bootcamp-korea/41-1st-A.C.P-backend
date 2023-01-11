const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");
const potRouter = require("./potRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);
router.use("/plants", potRouter.router);

module.exports = router;
