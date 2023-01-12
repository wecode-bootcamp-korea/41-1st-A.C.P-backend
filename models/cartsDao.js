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
    carts.id AS cart_id,
    JSON_ARRAYAGG(JSON_OBJECT(
      "plantId", carts.plant_id,
      "name", plants.name,
      "description", plants.description,
      "price",plants.price, 
      "plant_quantity", plant_quantity
      )) AS plants,

    JSON_ARRAYAGG(JSON_OBJECT(
      "pots_id", carts.pots_pot_color_id,
      "name", pots.name,
      "price",pots.price,
      "pot_quantity", carts.pot_quantity
     )) AS pots,

    JSON_ARRAYAGG(JSON_OBJECT(
      "nutrient_id", carts.nutrient_id, 
      "name", nutrients.name,
      "price",nutrients.price, 
      "nutrient_quantity", carts.nutrient_quantity
      )) AS nutrients
    FROM
        carts 
    JOIN plants ON plants.id = carts.plant_id
    JOIN pots_pot_colors ON pots_pot_colors.id = carts.pots_pot_color_id
    JOIN pots ON pots.id = pots_pot_colors.pot_id
    JOIN nutrients ON nutrients.id = carts.nutrient_id
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
  console.log(result);
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
