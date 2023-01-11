const { catchAsync } = require("../utils/error");
const cartService = require("../services/cartService");

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
  createCart,
};
