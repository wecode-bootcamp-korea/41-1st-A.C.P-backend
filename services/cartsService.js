const cartsDao = require("../models/cartsDao");

const getCartList = async (
  userId,
  plantId,
  plantQuantity,
  potId,
  potQuantity,
  nutrientId,
  nutrientQuantity
) => {
  return cartsDao.getCartList(
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity
  );
};

const deleteCart = async (cartId) => {
  return cartsDao.deleteCart(cartId);
};
module.exports = {
  getCartList,
  deleteCart,
};
