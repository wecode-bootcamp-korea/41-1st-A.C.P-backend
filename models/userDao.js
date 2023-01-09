const { appDataSource } = require("./dbconfig");

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
  getHashedPassword,
  getUserEmail,
  getUserId,
  getUserByEmail,
};
