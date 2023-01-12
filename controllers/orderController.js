const { catchAsync } = require("../utils/error");
const orderService = require("../services/orderService");

const createOrder = catchAsync(async (req, res) => {
  const {
    totalPrice,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity,
  } = req.body;

  const userId = req.user.userId;

  if (!totalPrice || !userId) {
    throw new Error("KEY_ERROR");
  }

  await orderService.createOrder(
    totalPrice,
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity
  );

  return res.status(200).json({ message: "ORDER SUCCESS!!!" });
});

module.exports = {
  createOrder,
};
