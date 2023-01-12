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

const nutrientsListFilterData = catchAsync(async (req, res) => {
  const { type, offset, limit } = req.query;

  const nutrientsListFilterData = await nutrientService.nutrientsListFilterData(
    type,
    offset,
    limit
  );

  res.status(200).json(nutrientsListFilterData);
});

module.exports = {
  getNutrientInfo,
  nutrientsListFilterData,
};
