const { appDataSource } = require("./dbconfig");

const getPotList = async (potsId) => {
  const result = await appDataSource.query(
    `SELECT
        pots.name,
        pot_sizes.name AS size,
        pot_colors.color,
        pots.price,
        pots.img_url
    FROM pots_pot_colors
    LEFT JOIN pots ON pots_pot_colors.id = pots.id
    LEFT JOIN pot_sizes ON pots.pot_size_id = pot_sizes.id
    LEFT JOIN pot_colors ON pot_colors.id = pots_pot_colors.pot_color_id
    LEFT JOIN pot_images ON pots_pot_colors.id = pot_images.pot_id
    WHERE pots.id = ?;`,
    [potsId]
  );
  return result;
};

module.exports = {
  getPotList,
};
