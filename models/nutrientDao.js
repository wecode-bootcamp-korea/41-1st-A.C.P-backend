const { appDataSource } = require("./dbconfig");

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
  getNutrientInfo,
};
