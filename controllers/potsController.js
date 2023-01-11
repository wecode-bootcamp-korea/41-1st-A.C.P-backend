const { catchAsync } = require("../utils/error");

const potsService = require("../services/potsService");

const getPotList = catchAsync(async (req, res) => {
  const { potsId } = req.params;
  if (!potsId) throw new Error("KEY_ERROR");

  const getPotList = await potsService.getPotList(potsId);
  return res.status(201).json({ data: getPotList });
});

module.exports = {
  getPotList,
};
