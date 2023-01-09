const { catchAsync } = require("../utils/error");
const orderService = require("../services/orderService");

const insertData = catchAsync(async (req, res) => {
  const {
    orderNumber,
    totalPrice,
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity,
  } = req.body;

  if (!orderNumber || !totalPrice || !userId) {
    throw new Error("KEY_ERROR");
  }

  await orderService.insertData(
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

  return res.status(200).json({ message: "ORDER SUCCESS!!!" });
});

module.exports = {
  insertData,
};
