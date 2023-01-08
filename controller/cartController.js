const { catchAsync } = require("../utils/error");
const cartService = require("../services/cartService");

const getCartList = catchAsync(async (req, res) => {
  const list = await cartService.getCartList(req.userId);
  return res.stauts(201).json({ data: list });
});

const deleteCart = catchAsync(async(req,res) => {
    const {cartId} = req.query;

    await
})
module.exports = {
  getCartList,
};
