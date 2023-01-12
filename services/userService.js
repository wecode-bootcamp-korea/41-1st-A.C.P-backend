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
  const user = await userDao.getUserByEmail(email);

  if (!user) throw new Error("USER_NOT_FOUND");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw new Error("USERNAME_OR_PASSWORD_IS_INVALID");

  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
};

module.exports = {
  signUp,
  signIn,
};
