const { catchAsync } = require("../utils/error");
const cartService = require("../services/cartsService");

const getCartList = catchAsync(async (req, res) => {
  const list = await cartService.getCartList(req.userId);
  res.status(200).json({ data: list });
});

const deleteCart = catchAsync(async (req, res) => {
  const { cartId: cartIds } = req.query;

  await cartService.deleteCart(cartIds);
  return res.status(200).json({ message: "CART_DELETED" });
});

module.exports = {
  getCartList,
  deleteCart,
};
