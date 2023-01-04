const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");

const signUp = async (email, password, name, phoneNumber) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
  );
  if (!pwValidation.test(password)) {
    const err = new Error("PASSWORD_IS_NOT_VALID");
    err.statusCode = 409;
    throw err;
  }

  const emailValidation = new RegExp(
    "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );
  if (!emailValidation.test(email)) {
    const err = new Error("EMAIL_IS_NOT_VALID");
    err.statusCode = 409;
    throw err;
  }

  const saltRounds = 12;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return await userDao.createUser(email, hashedPassword, name, phoneNumber);
};

module.exports = {
  signUp,
};
