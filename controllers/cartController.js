const { catchAsync } = require("../utils/error");
const cartService = require("../services/cartService");

const getCartList = catchAsync(async (req, res) => {
  const list = await cartService.getCartList(req.user.userId);
  res.status(200).json({ data: list });
});

const deleteCart = catchAsync(async (req, res) => {
  const { cartId: cartIds } = req.query;

  await cartService.deleteCart(cartIds);
  return res.status(200).json({ message: "CART_DELETED" });
});

const createCart = catchAsync(async (req, res) => {
  const {
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity,
  } = req.body;

  const userId = req.user.userId;

  await cartService.createCart(
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity
  );

  res.status(201).json({ message: "upsert data to cart success!!" });
});

module.exports = {
  getCartList,
  deleteCart,
  createCart,
};
