const { appDataSource } = require("./dbconfig");

const createUser = async (email, password, name, phoneNumber) => {
  try {
    return await appDataSource.query(
      `INSERT INTO users(
          email,
          password,
          name,
          phoneNumber
        ) VALUES (?, ?, ?, ?);
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
