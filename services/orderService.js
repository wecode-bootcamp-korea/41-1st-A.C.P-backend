const orderDao = require("../models/orderDao");

const getOrderList = async (userId) => {
  console.log("orderService, userId:", userId);
  return orderDao.getOrderList(userId);
};

const orderListFilterData = async (orderId) => {
  return orderDao.orderListFilterData(orderId);
};

module.exports = {
  getOrderList,
  orderListFilterData,
};
