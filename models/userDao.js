const { appDataSource } = require("./dbconfig");

const createUser = async (email, password, name, phone_number) => {
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
};

module.exports = {
  createUser,
};
