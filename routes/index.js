const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const plantRouter = require("./plantRouter");

router.use("/users", userRouter.router);
router.use("/plants", plantRouter.router);

module.exports = router;
