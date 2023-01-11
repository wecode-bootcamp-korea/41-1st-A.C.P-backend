const { appDataSource } = require("./dbconfig");

const ORDER_STATUS = Object.freeze({
  상품준비중: 1,
  배송중: 2,
  배송완료: 3,
});

const createOrder = async (
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
  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `INSERT INTO orders (
        order_number,
        total_price,
        user_id,
        order_status_id
      ) VALUES (?, ?, ?, ?);
     `,
      [orderNumber, totalPrice, userId, ORDER_STATUS.상품준비중]
    );

    const [orderId] = await queryRunner.query(
      `SELECT
      orders.id,
      orders.total_price
      FROM orders 
      WHERE order_number = ?;
      `,
      [orderNumber]
    );

    await queryRunner.query(
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

    await queryRunner.query(
      `DELETE FROM carts
      WHERE user_id = ?;
      `,
      [userId]
    );

    await queryRunner.query(
      `UPDATE
      users
      SET point = point - ?
      WHERE id = ?
      `,
      [totalPrice, userId]
    );

    await queryRunner.commitTransaction();
  } catch (err) {
    console.log(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  createOrder,
};
