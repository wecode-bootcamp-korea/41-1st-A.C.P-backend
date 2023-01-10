const jwt = require("jsonWebtoken");

const { userService } = require("../services/userService");

const loginRequired = async (req, res) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    const error = new Error("NEED_ACCESS_TOKEN");
    err.statusCode = 401;

    return res.status(error.statusCode).json({ message: error.message });
  }

  const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET);

  const user = await userService.getUserById(decoded.id);

  if (!user) {
    const error = new Error("USER_DOES_NOT_MATCH");
    err.statusCode = 401;

    return res.status(error.statusCode).json({ message: error.message });
  }

  req.user = user;

  next();
};
module.exports = {
  loginRequired,
};
