const { catchAsync } = require("../units/error");
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
        JSON_ARRAYAGG(JSON_OBJECT("plant_id", plant_id,"plant_quantity", plant_quantity)) AS plants,   
        JSON_ARRAYAGG(JSON_OBJECT("pots_id", pot_id,"pot_quantity", pot_quantity)) AS pots,
        JSON_ARRAYAGG(JSON_OBJECT("nutrients_id",nutrient_id,"nutrient_quantity", nutrient_quantity)) AS nutrients
    FROM
        carts
    WHERE
    user_id = 1
    GROUP BY
    user_id;
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

const deleteCart = catchAsync(async (req, res) => {
  await appDataSource.query(
    `DELETE FROM
            carts
        WHERE
            carts_id = ?
        `
  );
  throw new Error(401, "DELETE_NOT_FUNCTION");
});

const deleteCartList = async (req, res) => {
  await appDataSource.query(
    `DELETE FROM
            carts
        WHERE
            plant_id = ?,
            plant_quantity = ?,
            pot_id = ?,
            pot_quantity = ?,
            nutrient_id = ?,
            nutrient_quantity = ?
        `,
    [plantId, plantQuantity, potId, potQuantity, nutrientId, nutrientQuantity]
  );
};
module.exports = {
  getCartList,
  deleteCartList,
};
