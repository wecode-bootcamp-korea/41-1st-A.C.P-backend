const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const {
  emailValidationCheck,
  passwordValidationCheck,
} = require("../utils/validation-check");

const signUp = async (email, password, name, phone_number) => {
  await emailValidationCheck(email);
  await passwordValidationCheck(password);

  const saltRounds = 12;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return userDao.createUser(email, hashedPassword, name, phone_number);
};

module.exports = {
  signUp,
};
