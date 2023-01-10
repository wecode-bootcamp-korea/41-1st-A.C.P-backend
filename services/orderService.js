const orderDao = require("../models/orderDao");

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
  return orderDao.insertData(
    orderNumber,
    totalPrice,
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity
  );
};

module.exports = {
  insertData,
};
