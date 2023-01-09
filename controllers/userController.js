const { catchAsync } = require("../utils/error");
const userService = require("../services/userService");

const signUp = catchAsync(async (req, res) => {
  const { email, password, name, phoneNumber } = req.body;

  if (!password || !email || !name || !phoneNumber) {
    throw new Error("KEY_ERROR");
  }

  await userService.signUp(email, password, name, phoneNumber);

  res.status(201).json({ message: "SIGNUP_SUCCESS" });
});

module.exports = {
  signUp,
};
