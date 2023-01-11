const { catchAsync } = require("../utils/error");

const potsService = require("../services/potsService");

const potsDetails = catchAsync(async (req, res) => {
  const { potsId } = req.params;
  if (!potsId) throw new Error("KEY_ERROR");

  const potsDetails = await potsService.potsDetails(potsId);
  res.status(201).json({ message: potsDetails });
});

module.exports = {
  potsDetails,
};
