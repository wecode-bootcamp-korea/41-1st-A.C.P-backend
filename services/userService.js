const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");

const signUp = async (email, password, name, phoneNumber) => {
  const saltRounds = 12;

  const makeHash = async (password, saltRounds) => {
    return await bcrypt.hash(password, saltRounds);
  };

  const hashedPassword = await makeHash(password, saltRounds);

  const createUser = await userDao.createUser(
    email,
    hashedPassword,
    name,
    phoneNumber
  );

  return createUser;
};

module.exports = {
  signUp,
};
