const { appDataSource } = require("./dbconfig");

const getHashedPassword = async (email) => {
  try {
    const [{ hashedPassword }] = await appDataSource.query(
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
};
