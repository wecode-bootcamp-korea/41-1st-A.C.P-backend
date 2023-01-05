const bcrypt = require("bcrypt");
const response = require("express");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");

const signIn = async (email, password) => {
  const hashedPassword = await userDao.getHashedPassword(email);
  if (!hashedPassword) {
    const err = new Error("PASSWORD_DOES_NOT_MATCH");
    err.statusCode = 401;
    throw err;
  }
  const user = await userDao.userEmail(email);
  if (user.length == 0) {
    const err = new Error("INVALID_USER_ID");
    err.statusCode = 401;
    throw err;
  }

  const userId = await userDao.getUserId(email);

  return jwt.sign(userId, process.env.secretKey);
};

module.exports = {
  signIn,
};
