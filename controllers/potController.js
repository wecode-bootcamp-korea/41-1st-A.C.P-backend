const { catchAsync } = require("../utils/error");

const potService = require("../services/potService");

const listfilterData = catchAsync(async (req, res) => {
  const { size, color } = req.query;
  // if (!plantId) {
  //   throw new Error("KEY_ERROR");
  // }

  const listfilterData = await potService.listfilterData(size, color);

  res.status(200).json(listfilterData);
});

module.exports = {
  listfilterData,
};
