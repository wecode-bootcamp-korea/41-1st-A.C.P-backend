const { appDataSource } = require("./dbconfig");

const getCartList = async (
  userId,
  plantId,
  plantQuantity,
  potId,
  potQuantity,
  nutrientId,
  nutrientQuantity
) => {
  return appDataSource.query(
    `SELECT
        user_id,
        plant_id,
        plant_quantity,
        pot_id,
        pot_quantity,
        nutrient_id,
        nutrient_quantity,      
        JSON_ARRAYAGG(JSON_OBJECT("pots_id", pot_id,"pot_quantity", pot_quantitiy)) AS pots,
        JSON_ARRAYAGG(JSON_OBJECT("nutrients_id",nutrient_id,"nutrient_quantity",nutrient_quantity)) AS nutrients
    FROM
        carts
    
    WHERE
    user_id = ?;
        `,
    [
      userId,
      plantId,
      plantQuantity,
      potId,
      potQuantity,
      nutrientId,
      nutrientQuantity,
    ]
  );
};

module.exports = {
  getCartList,
};
