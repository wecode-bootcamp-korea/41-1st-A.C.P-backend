const { appDataSource } = require("./dbconfig");
const queryBuilder = (type) => {
  let andclause = "WHERE ";

  if (type) {
    andclause = andclause + `nutrient_types.id IN (${type.toString()})\n`;
  }

  if (!type) {
    andclause = ";";
  }

  return andclause;
};

const getFilterNutrientData = async (type) => {
  const andquery = await queryBuilder(type);

  const data = await appDataSource.query(
    `SELECT
      nutrients.id as nutrient_id,
      nutrients.name as nutrient_name,
      nutrients.price as nutrient_price,
      nutrient_types.name as type
      FROM nutrients
    INNER JOIN nutrient_types ON nutrient_types.id = nutrients.nutrient_type_id
      ${andquery}
    `
  );
  return data;
};

module.exports = {
  getFilterNutrientData,
};
``;
