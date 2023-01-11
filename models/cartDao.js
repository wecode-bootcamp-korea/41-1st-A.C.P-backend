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
  console.log(userId);
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

module.exports = {
  createCart,
};
