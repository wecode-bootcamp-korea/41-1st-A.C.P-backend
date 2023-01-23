const { appDataSource } = require("./dbconfig");
const queryBuilder = (ordersId) => {
  console.log(ordersId, 33333333)
  let clause = "WHERE ";

  if (ordersId) {
    clause = clause + `order_products.order_id IN (${ordersId.toString()})\n`;
  }
  if (!ordersId) {
    clause = ";";
  }
  console.log(clause,"-p-p-p-p-p-p")
  return clause;
};

const getOrderList = async (userId) => {
  console.log(userId, "너는 나오냐?")
  const orderId = await appDataSource.query(
    `SELECT
            orders.id
        FROM
            orders
        JOIN users ON orders.user_id = users.id
        JOIN order_products ON order_products.order_id = orders.id
        WHERE
            orders.user_id = ?;
        `,
    [userId]
  );
  console.log(orderId, 111111111)
  return orderId;
};

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
    const createOrder = await queryRunner.query(
      `INSERT INTO orders (
        order_number,
        total_price,
        user_id,
        order_status_id
      ) VALUES (?, ?, ?, ?);
     `,
      [orderNumber, totalPrice, userId, ORDER_STATUS.상품준비중]
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
        createOrder.insertId,
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
      WHERE id = ?;
      `,
      [totalPrice, userId]
    );

    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    throw new Error("FAILED_TO_CREATE_ORDER");
  } finally {
    await queryRunner.release();
  }
};

const orderListFilterData = async (ordersId) => {
  console.log(ordersId,"너냐?")
  const clause = await queryBuilder(ordersId);
  return appDataSource.query(
    `SELECT
              orders.id AS order_id,
              plants.name AS plants_name,
              plants.price AS plants_price,
              sizes.name AS plant_size,
              species.name AS plant_specie,
              pots.name AS pot_name,
              pots.price AS pot_price,
              pot_sizes.name AS pot_size,
              nutrients.name AS nutrients_name,
              nutrients.price AS nutrients_price,
              nutrient_types.name AS nutrient_type
          FROM
              order_products
          LEFT JOIN orders ON order_products.order_id = orders.id
          LEFT JOIN plants ON order_products.plant_id = plants.id
          LEFT JOIN sizes ON plants.size_id = sizes.id
          LEFT JOIN species ON plants.species_id = species.id
          LEFT JOIN pots_pot_colors ON order_products.pots_pot_color_id = pots_pot_colors.id
          LEFT JOIN pots ON pots_pot_colors.pot_id = pots.id
          LEFT JOIN pot_sizes ON pots.pot_size_id = pot_sizes.id
          LEFT JOIN nutrients ON order_products.nutrient_id = nutrients.id
          LEFT JOIN nutrient_types ON nutrients.nutrient_type_id = nutrient_types.id
          ${clause}
        `
  );
};

module.exports = {
  createOrder,
  getOrderList,
  orderListFilterData,
};
