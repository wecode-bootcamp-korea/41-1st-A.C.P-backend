const { appDataSource } = require("./dbconfig");

const getHashedPassword = async (email) => {
  try {
    const hashedPassword = await appDataSource.query(
      `SELECT
                password AS hashedPassword
            FROM
                users
            WHERE
                email = ?;
            `,
      [email]
    );
    return hashedPassword;
  } catch (err) {
    console.log(err);
    const error = new Error("GET_HASED_PASSWORD_FAILED");
    error.statusCode = 401;
    throw error;
  }
};

const userEmail = async (email) => {
  try {
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
  } catch (err) {
    console.log(err);
    const error = new Error("존재하지않는 이메일입니다.");
    error.statusCode = 409;
    throw error;
  }
};

const getUserId = async (email) => {
  try {
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
  } catch (err) {
    console.log(err);
    const error = new Error("GET_USER_ID_FAILED");
    error.statusCode = 401;
    throw error;
  }
};

module.exports = {
  getHashedPassword,
  getUserId,
  userEmail,
};
