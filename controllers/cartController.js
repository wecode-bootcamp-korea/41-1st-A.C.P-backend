const { catchAsync } = require("../utils/error");
const cartService = require("../services/cartService");

const insertData = catchAsync(async (req, res) => {
  const {
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity,
  } = req.body;

  if (!userId) {
    throw new Error("KEY_ERROR");
  }

  await cartService.insertData(
    req.user.id,
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
  insertData,
};
