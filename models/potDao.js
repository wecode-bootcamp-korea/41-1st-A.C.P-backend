const { appDataSource } = require("./dbconfig");
const queryBuilder = (size, color, offset, limit) => {
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

  if (limit) {
    andclause = andclause + `LIMIT ${limit}\n`;
  }

  if (offset) {
    andclause = andclause + `OFFSET ${offset}\n`;
  }

  if (!size && !color && !limit && !offset) {
    andclause = ";";
  }

  return andclause;
};

const potsListFilterData = async (size, color, offset, limit) => {
  const andquery = await queryBuilder(size, color, offset, limit);

  const potsList = await appDataSource.query(
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
      ;
      `
  );

  const [totalCount] = await appDataSource.query(
    `SELECT FOUND_ROWS() AS totalCount`
  );

  return { potsList, totalCount };
};

const getPotInfo = async (potId) => {
  const [result] = await appDataSource.query(
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
  potsListFilterData,
  getPotInfo,
};
``;
