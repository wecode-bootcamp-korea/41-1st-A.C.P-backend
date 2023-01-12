const { appDataSource } = require("./dbconfig");

const queryBuilder = (type, offset, limit) => {
  let andclause = "WHERE ";

  if (type) {
    andclause = andclause + `nutrient_types.id IN (${type.toString()})\n`;
  }

  if (limit) {
    andclause = andclause + `LIMIT ${limit}\n`;
  }

  if (offset) {
    andclause = andclause + `OFFSET ${offset}\n`;
  }

  if (!type && !limit && !offset) {
    andclause = ";";
  }

  return andclause;
};

const nutrientsListFilterData = async (type, offset, limit) => {
  const andquery = await queryBuilder(type, offset, limit);

  const nutrientsList = await queryRunner.query(
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

  const [totalCount] = await queryRunner.query(
    `SELECT FOUND_ROWS() AS totalCount`
  );

  return { nutrientsList, totalCount };
};

const getNutrientInfo = async (nutrientId) => {
  return appDataSource.query(
    `SELECT 
      nutrients.name as nutrient_name,
      nutrient_types.name as nutrient_type
    FROM nutrients
    JOIN nutrient_types ON nutrient_types.id = nutrients.nutrient_type_id
    WHERE nutrients.id = ?;
        `,
    [nutrientId]
  );
};

module.exports = {
  nutrientsListFilterData,
  getNutrientInfo,
};
