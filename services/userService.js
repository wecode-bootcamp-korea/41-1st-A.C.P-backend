const bcrypt = require("bcrypt");
const response = require("express");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");

const signIn = async (email, password) => {
  const user = await userDao.getUserEmail(email);
  if (user.length == 0) throw new Error("INVALID_USER_ID");

  const userId = await userDao.getUserId(email);

  const hashedPassword = await userDao.getHashedPassword(email);
  if (!hashedPassword) throw new Error("PASSWORD_DOES_NOT_MATCH");

  return jwt.sign(userId, process.env.secretKey);
};

module.exports = {
  signIn,
};
