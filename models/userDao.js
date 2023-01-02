const { appDataSource } = require("./dbconfig");

const createUser = async (email, password) => {
  try {
    return await appDataSource.query(
      `INSERT INTO users(
          email,
          password
        ) VALUES (?, ?);
        `,
      [email, password]
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
