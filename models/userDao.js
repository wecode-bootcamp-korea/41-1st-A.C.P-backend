const { appDataSource } = require("./dbconfig");

const createUser = async (email, password, name, phone_number) => {
  try {
    return appDataSource.query(
      `INSERT INTO users(
          email,
          password,
          name,
          phone_number
        ) VALUES (?, ?, ?, ?);
        `,
      [email, password, name, phone_number]
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
