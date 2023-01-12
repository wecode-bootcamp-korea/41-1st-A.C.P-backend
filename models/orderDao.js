const { appDataSource } = require("./dbconfig");
const queryBuilder = (ordersId) => {
  let clause = "WHERE ";

  if (ordersId) {
    clause = clause + `order_products.order_id IN (${ordersId.toString()})\n`;
  }
  if (!ordersId) {
    clause = ";";
  }

  return clause;
};

const getOrderList = async (userId) => {
  const [orderId] = await appDataSource.query(
    `SELECT
            orders.id
        FROM
            orders
        WHERE
            orders.user_id = ?;
        `,
    [userId]
  );
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
  const clause = await queryBuilder(ordersId);

  return appDataSource.query(
    `SELECT
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
          JOIN plants ON order_products.plant_id = plants.id
          JOIN sizes ON plants.size_id = sizes.id
          JOIN species ON plants.species_id = species.id
          JOIN pots_pot_colors ON order_products.pots_pot_color_id = pots_pot_colors.id
          JOIN pots ON pots_pot_colors.pot_id = pots.id
          JOIN pot_sizes ON pots.pot_size_id = pot_sizes.id
          JOIN nutrients ON order_products.nutrient_id = nutrients.id
          JOIN nutrient_types ON nutrients.nutrient_type_id = nutrient_types.id
          ${clause}
        `
  );
};

module.exports = {
  createOrder,
  getOrderList,
  orderListFilterData,
};
