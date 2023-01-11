const { catchAsync } = require("../utils/error");

const potsService = require("../services/potsService");

const getPotInfo = catchAsync(async (req, res) => {
  const { potId } = req.params;
  if (!potId) throw new Error("KEY_ERROR");

  const getPotInfo = await potsService.getPotInfo(potId);
  return res.status(201).json({ data: getPotInfo });
});

module.exports = {
  getPotInfo,
};
