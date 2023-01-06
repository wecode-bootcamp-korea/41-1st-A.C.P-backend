const { catchAsync } = require("../units/error");
const userService = require("../services/userService");

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw new Error("KEY_ERROR");

  const jwtToken = await userService.signIn(email, password);

  return res.status(200).json({ accessToken: jwtToken });
});

module.exports = {
  signIn,
};
