const uuid = require("uuid");

const orderDao = require("../models/orderDao");
const userDao = require("../models/userDao");

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
  const userPoint = await userDao.getUserById(userId).point;

  if (userPoint < totalPrice) throw new Error("NOT_ENOUGH_POINT");

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
