const { appDataSource } = require("./dbconfig");

const potsDetails = async (potsId) => {
  try {
    return await appDataSource.query(
      `SELECT
                pots.name,
                pots.price,
                pots_potsColors.potsColor_id,
                potsing.img_url
            FROM
                pots
            JOIN pots_potsColors ON pots.potsColors.id = pots.id,
            JOIN potsColors ON potsColors.id = pots_potsColors.potsColors_id, 
            WHERE pots.id = ?;
            `,
      [potsId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  potsDetails,
};
