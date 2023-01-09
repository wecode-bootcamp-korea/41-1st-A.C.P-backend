const { appDataSource } = require("./dbconfig");

const insertData = async (
  orderNumber,
  totalPrice,
  userId,
  plantId,
  plantQuantity,
  potId,
  potQuantity,
  nutrientId,
  nutrientQuantity
) => {
  await appDataSource.query(
    `INSERT INTO orders (
           order_number,
           total_price,
           user_id,
           order_status_id
         ) VALUES (?, ?, ?, 1);
        `,
    [orderNumber, totalPrice, userId]
  );

  const [orderId] = await appDataSource.query(
    `SELECT orders.id
    FROM orders 
    WHERE order_number = ?;
    `,
    [orderNumber]
  );

  await appDataSource.query(
    `INSERT INTO order_products (
      plant_id,
      plant_quantity,
      pot_id,
      pot_quantity,
      nutrient_id,
      nutrient_quantity,
      order_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `,
    [
      plantId,
      plantQuantity,
      potId,
      potQuantity,
      nutrientId,
      nutrientQuantity,
      orderId.id,
    ]
  );

  await appDataSource.query(
    `DELETE FROM carts
    WHERE user_id = ?;
    `,
    [userId]
  );
};

module.exports = {
  insertData,
};
