const orderDao = require("../models/orderDao");
const uuid = require("uuid");
const orderNumber = uuid.v4();

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
