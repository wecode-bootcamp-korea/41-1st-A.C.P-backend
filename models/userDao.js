const { appDataSource } = require("./dbconfig");

const createUser = async (email, password, name, phoneNumber) => {
  console.log(email);
  console.log(password);
  console.log(name);
  console.log(phoneNumber);
  try {
    return await appDataSource.query(
      `INSERT INTO users(
          email,
          password,
          name,
          phoneNumber,
          point
        ) VALUES (?, ?, ?, ?, 0);
        `,
      [email, password, name, phoneNumber]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  createUser,
};
