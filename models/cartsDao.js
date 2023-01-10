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
  const result = await appDataSource.query(
    `SELECT
    carts.id as cart_id,
    JSON_ARRAYAGG(JSON_OBJECT(
      "plantId", carts.plant_id,
      "name", plants.name,
      "description", plants.description,
      "price",plants.price, 
      "plant_quantity", plant_quantity
      )) AS plants,

    JSON_ARRAYAGG(JSON_OBJECT(
      "pots_id", carts.pot_id,
      "name", pots.name,
      "description", pots.description,
      "price",pots.price,
      "pot_quantity", pot_quantity
     )) AS pots,

    JSON_ARRAYAGG(JSON_OBJECT(
      "nutrients_id", carts.nutrient_id, 
      "name", nutrients.name,
      "description", nutrients.description,
      "price",nutrients.price, 
      "nutrient_quantity", nutrient_quantity
      )) AS nutrients
FROM
    carts 
LEFT JOIN plants ON plants.id = carts.plant_id
LEFT JOIN pots_pot_colors ON pots_pot_colors.id = carts.pot_id
LEFT JOIN pots ON pots.id = pots_pot_colors.pot_id
LEFT JOIN nutrients ON nutrients.id = carts.nutrient_id
WHERE
user_id = 1
GROUP BY
carts.id;
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
  return result;
};

const deleteCart = async (cartId) => {
  await appDataSource.query(
    `DELETE FROM
            carts
        WHERE
            carts.id = ?;
        `,
    [cartId]
  );
  throw new Error(401, "DELETE_NOT_FUNCTION");
};

module.exports = {
  getCartList,
  deleteCart,
};
