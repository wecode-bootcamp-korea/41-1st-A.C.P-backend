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

const getUserId = async (email) => {
  const [userId] = await appDataSource.query(
    `SELECT
          id AS userId
        FROM
          users
        WHERE
          email = ?;`,
    [email]
  );
  return userId;
};

const getHashedPassword = async (email) => {
  const [result] = await appDataSource.query(
    `SELECT
          password AS hashedPassword
     FROM
          users
     WHERE
          email = ?;
    `,
    [email]
  );
  return result;
};

const getUserEmail = async (email) => {
  const result = await appDataSource.query(
    `SELECT 
          email
     FROM 
          users
     WHERE 
          email = ?;
    `,
    [email]
  );
  return result;
};

const getUserByEmail = async (email) => {
  const [userId] = await appDataSource.query(
    `SELECT
          id AS userId
     FROM
          users
     WHERE
          email = ?;`,
    [email]
  );
  return userId;
};

module.exports = {
  createUser,
  getHashedPassword,
  getUserEmail,
  getUserId,
  getUserByEmail,
};
