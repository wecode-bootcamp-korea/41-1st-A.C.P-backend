const { appDataSource } = require("./dbconfig");

const potsDetails = async (potsId) => {
  return await appDataSource.query(
    `SELECT
                pots.name,
                pots.price,
                pots_potsColors.potsColor_id,
                potsing.img_url,
                potsSizes.size
            FROM
                pots
            LEFT JOIN pots_potsColors ON pots.potsColors.id = pots.id,
            LEFT JOIN pots_Colors ON potsColors.id = pots_potsColors.potsColors_id,
            LEFT JOIN potsimg ON pots.id = potsimg.pots_id,
            LEFT JOIN potsSizes ON pots.potsSizes_id = potsSizes.id
            LEFT WHERE pots.id = ?;
            `,
    [potsId]
  );
};

module.exports = {
  potsDetails,
};
