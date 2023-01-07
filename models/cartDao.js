const { appDataSource } = require("./dbconfig");

const insertData = async (
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
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY
        UPDATE 
        plant_id = ?,
        plant_quantity = ?,
        pot_id = ?,
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
  insertData,
};

// INSERT INTO users (col1, col2)
// VALUES ('val1', 'val2')
// ON DUPLICATE KEY
// UPDATE col1='updateval1', col2='updateval2';
