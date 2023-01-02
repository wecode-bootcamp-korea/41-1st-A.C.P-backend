// const dotenv = require("dotenv").config();

// const userDao = require("../modles/userDao");

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebToken");

// const signUp = async (name, password, email, phoneNum) => {
//   const pwValidation = new RegExp(
//     "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
//   );
//   if (!pwValidation.test(password)) {
//     const err = new Error("PASSWORD IS NOT VALID");
//     err.statusCode = 409;
//     throw err;
//   }

//   const saltOrRounds = 12;
//   const hashPassword = await bcrypt.hash(password, saltOrRounds);
//   const signUp = await userDao.signUp(name, password, email, phoneNum);

//   return signUp;
// };

// const signIn = async (email, password) => {
//   const userDao = await userDao.signIn(email);
//   const result = await bcrypt.compare(password, userData.password);
//   const jwtToken = jwt.sign(userData.id, process.env.SECRET_KEY);
//   return { result, jwtToken };
// };

// module.exports = {
//   signUp,
//   signIn,
// };
//service/userService.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");

const signUp = async (email, password) => {
  const saltRounds = 12;

  const makeHash = async (password, saltRounds) => {
    return await bcrypt.hash(password, saltRounds);
  };

  const hashedPassword = await makeHash(password, saltRounds);

  const createUser = await userDao.createUser(email, hashedPassword);

  return createUser;
};

module.exports = {
  signUp,
};
