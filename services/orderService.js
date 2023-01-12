const uuid = require("uuid");
const orderDao = require("../models/orderDao");
const userDao = require("../models/userDao");

const getOrderList = async (userId) => {
  return orderDao.getOrderList(userId);
};

const orderListFilterData = async (orderId) => {
  return orderDao.orderListFilterData(orderId);
};

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
  const user = await userDao.getUserById(userId);
  const userPoint = user.point;

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
  getOrderList,
  orderListFilterData,
};
