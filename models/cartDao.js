const { appDataSource } = require("./dbconfig");

const createCart = async (
  userId,
  plantId,
  plantQuantity,
  potId,
  potQuantity,
  nutrientId,
  nutrientQuantity
) => {
  return appDataSource.query(
    `INSERT INTO carts(
      user_id,
      plant_id,
      plant_quantity,
      pots_pot_color_id,
      pot_quantity,
      nutrient_id,
      nutrient_quantity
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY
    UPDATE 
    user_id = ?,
    plant_id = ?,
    plant_quantity = ?,
    pots_pot_color_id = ?,
    pot_quantity = ?,
    nutrient_id = ?,
    nutrient_quantity = ?;
    `,
    [
      userId,
      plantId,
      plantQuantity,
      potId,
      potQuantity,
      nutrientId,
      nutrientQuantity,
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

const getCartList = async (userId) => {
  return appDataSource.query(
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
    LEFT JOIN plants ON plants.id = carts.plant_id
    LEFT JOIN pots_pot_colors ON pots_pot_colors.id = carts.pots_pot_color_id
    LEFT JOIN pots ON pots.id = pots_pot_colors.pot_id
    LEFT JOIN nutrients ON nutrients.id = carts.nutrient_id
    WHERE
    user_id = ?
    GROUP BY
      carts.id;
        `,
    [userId]
  );
};

const deleteCart = async (cartIds) => {
  await appDataSource.query(
    `DELETE FROM
            carts
        WHERE id IN (?)
        `,
    [cartIds]
  );
};

module.exports = {
  createCart,
  getCartList,
  deleteCart,
};
