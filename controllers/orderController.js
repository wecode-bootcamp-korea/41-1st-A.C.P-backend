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

module.exports = {
  orderListFilterData,
};
