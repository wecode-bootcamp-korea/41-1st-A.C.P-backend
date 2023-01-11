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

const getUserById = async (userId) => {
  const [result] = await appDataSource.query(
    `SELECT
          id AS userId
        FROM
          users
        WHERE
          id = ?;`,
    [userId]
  );
  return result;
};

const checkRegisteredEmail = async (email) => {
  const [result] = await appDataSource.query(
    `
    SELECT EXIST (
      SELECT id
      FROM users
      WHERE email = ?
    ) as registered
    `,
    [email]
  );
  return !!parseInt(result);
};

const getUserByEmail = async (email) => {
  const [user] = await appDataSource.query(
    `SELECT
          id,
          email,
          password
     FROM
          users
     WHERE
          email = ?;`,
    [email]
  );
  return user;
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  checkRegisteredEmail,
};
