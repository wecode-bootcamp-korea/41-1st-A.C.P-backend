const orderDao = require("../models/orderDao");
const uuid = require("uuid");

const createOrder = async (
  totalPrice,
  userId,
  plantId,
  plantQuantity,
  potId,
  potQuantity,
  nutrientId,
  nutrientQuantity
) => {
  const orderNumber = uuid.v4();

  return orderDao.createOrder(
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
  createOrder,
};
