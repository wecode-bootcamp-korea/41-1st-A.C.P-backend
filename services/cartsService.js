const cartsDao = require("../models/cartsDao");

const getCartList = async (userId) => {
  return cartsDao.getCartList(userId);
};

const deleteCart = async (cartId) => {
  return cartsDao.deleteCart(cartId);
};
module.exports = {
  getCartList,
  deleteCart,
};
