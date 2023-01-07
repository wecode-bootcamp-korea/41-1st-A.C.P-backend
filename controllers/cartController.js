const { catchAsync } = require("../utils/error");
const cartService = require("../services/cartService");

const insertData = catchAsync(async (req, res) => {
  const {
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity,
  } = req.body;

  if (!password || !email || !name || !phone_number) {
    throw new Error("KEY_ERROR");
  }

  const data = await cartService.insertData(
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity
  );

  res.status(201).json({ message: data });
});

module.exports = {
  insertData,
};
