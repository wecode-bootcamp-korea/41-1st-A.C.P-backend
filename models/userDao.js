const { appDataSource } = require("./dbconfig");

const createUser = async (email, password, name, phoneNumber) => {
  return appDataSource.query(
    `INSERT INTO users(
          email,
          password,
          name,
          phone_number
        ) VALUES (?, ?, ?, ?);
        `,
    [email, password, name, phoneNumber]
  );
};

module.exports = {
  createUser,
};
