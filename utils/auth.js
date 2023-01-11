const jwt = require("jsonWebtoken");

const userDao = require("../models/userDao");

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    const err = new Error("NEED_ACCESS_TOKEN");
    err.statusCode = 401;

    return res.status(err.statusCode).json({ message: err.message });
  }

  let decoded;
  try {
    decoded = await jwt.verify(accessToken, process.env.JWT_SECRET);
  } catch {
    const err = new Error("INVALID TOKEN");
    err.statusCode = 401;

    return res.status(err.statusCode).json({ message: err.message });
  }

  const user = await userDao.getUserById(decoded.userId);

  if (!user) {
    const err = new Error("USER_DOES_NOT_MATCH");
    err.statusCode = 401;

    return res.status(err.statusCode).json({ message: err.message });
  }

  req.user = user;

  next();
};
module.exports = {
  loginRequired,
};
