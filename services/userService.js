const bcrypt = require("bcrypt");
const response = require("express");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");

const {
  emailValidationCheck,
  passwordValidationCheck,
} = require("../utils/validation-check");

const signUp = async (email, password, name, phoneNumber) => {
  await emailValidationCheck(email);
  await passwordValidationCheck(password);

  const saltRounds = 12;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return userDao.createUser(email, hashedPassword, name, phoneNumber);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserEmail(email);
  if (user.length == 0) throw new Error("USER_NOT_FOUND");

  const userId = await userDao.getUserId(email);

  const hashedPassword = await userDao.getHashedPassword(email);
  const result = await bcrypt.compare(password, hashedPassword.hashedPassword);

  if (!result) throw new Error("PASSWORD_DOES_NOT_MATCH");

  return jwt.sign(userId, process.env.secretKey);
};

module.exports = {
  signUp,
  signIn,
};
