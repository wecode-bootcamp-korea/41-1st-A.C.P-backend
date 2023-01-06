const { catchAsync } = require("../utils/error");
const userService = require("../services/userService");

const signUp = catchAsync(async (req, res) => {
  const { email, password, name, phone_number } = req.body;

  if (!password || !email || !name || !phone_number) {
    throw new Error("KEY_ERROR");
  }

  await userService.signUp(email, password, name, phone_number);

  res.status(201).json({ message: "SIGNUP_SUCCESS" });
});

module.exports = {
  signUp,
};
