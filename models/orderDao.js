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

module.exports = {
  getOrderList,
  orderListFilterData,
};
