const { catchAsync } = require("../utils/error");

const nutrientService = require("../services/nutrientService");

const getNutrientInfo = catchAsync(async (req, res) => {
  const { nutrientId } = req.params;
  if (!nutrientId) {
    throw new Error("KEY_ERROR");
  }

  const [nutrientInfo] = await nutrientService.getNutrientInfo(nutrientId);

  return res.status(200).json(nutrientInfo);
});

module.exports = {
  getNutrientInfo,
};
