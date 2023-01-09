const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const filterRouter = require("./listfilterRouter");

router.use("/users", userRouter.router);
router.use("/lists", filterRouter.router);

module.exports = router;
