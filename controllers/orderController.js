const { catchAsync } = require("../utils/error");
const orderService = require("../services/orderService");

const orderListFilterData = catchAsync(async (req, res) => {
  const userId = req.user.userId;

  const orderId = await orderService.getOrderList(userId);

  const orderListFilterData = await orderService.orderListFilterData(
    orderId.id
  );
  res.status(200).json(orderListFilterData);
});

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
  orderListFilterData,
};
