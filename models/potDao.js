const { appDataSource } = require("./dbconfig");
const queryBuilder = (size, color) => {
  let andclause = "WHERE ";

  if (size) {
    andclause = andclause + `pot_sizes.id IN (${size.toString()})\n`;
  }

  if (size && color) {
    andclause = andclause + "AND ";
  }

  if (color) {
    andclause = andclause + `pot_colors.id IN (${color.toString()})\n`;
  }

  if (!size && !color) {
    andclause = ";";
  }

  return andclause;
};

const listfilterData = async (size, color) => {
  const andquery = await queryBuilder(size, color);

  const data = await appDataSource.query(
    `SELECT
      pots.id as pot_id,
      pot_images.img_url,
      pots.name as pot_name,
      pots.price as pot_price
    FROM pots_pot_colors
    INNER JOIN pots ON pots_pot_colors.id = pots.id
    INNER JOIN pot_sizes ON pots.pot_size_id = pot_sizes.id
    INNER JOIN pot_colors ON pot_colors.id = pots_pot_colors.pot_color_id
    INNER JOIN pot_images ON pots_pot_colors.id = pot_images.pot_id
      ${andquery}
    `
  );
  return data;
};

module.exports = {
  listfilterData,
};
``;
