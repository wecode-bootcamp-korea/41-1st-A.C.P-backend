const { catchAsync } = require("../utils/error");
const userService = require("../services/userService");

const signUp = catchAsync(async (req, res) => {
  const { email, password, name, phoneNumber } = req.body;

  if (!password || !email || !name || !phoneNumber)
    throw new Error("KEY_ERROR");

  await userService.signUp(email, password, name, phoneNumber);

  res.status(201).json({ message: "SIGNUP_SUCCESS" });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw new Error("KEY_ERROR");

  const accessToken = await userService.signIn(email, password);

  return res.status(200).json({ accessToken });
});

module.exports = {
  signIn,
  signUp,
};
