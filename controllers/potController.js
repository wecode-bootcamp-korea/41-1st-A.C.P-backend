const { catchAsync } = require("../utils/error");

const potService = require("../services/potService");

const getPotInfo = catchAsync(async (req, res) => {
  const { potId } = req.params;
  if (!potId) throw new Error("KEY_ERROR");

  const getPotInfo = await potService.getPotInfo(potId);
  return res.status(201).json({ data: getPotInfo });
});

module.exports = {
  getPotInfo,
};
