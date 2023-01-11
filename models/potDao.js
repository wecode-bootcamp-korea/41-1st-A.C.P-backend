const { appDataSource } = require("./dbconfig");

const getPotInfo = async (potId) => {
  const result = await appDataSource.query(
    `SELECT
        pots.name,
        pot_sizes.name AS size,
        pot_colors.color,
        pots.price,
        pot_images.img_url
    FROM pots_pot_colors
    INNER JOIN pots ON pots_pot_colors.id = pots.id
    INNER JOIN pot_sizes ON pots.pot_size_id = pot_sizes.id
    INNER JOIN pot_colors ON pot_colors.id = pots_pot_colors.pot_color_id
    INNER JOIN pot_images ON pots_pot_colors.id = pot_images.pot_id
    WHERE pots.id = ?;`,
    [potId]
  );
  return result;
};

module.exports = {
  getPotInfo,
};
