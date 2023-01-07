const { appDataSource } = require("./dbconfig");

const createUser = async (
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
          pot_id,
          pot_quantity,
          nutrient_id,
          nutrient_quantity
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
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
  createUser,
};
