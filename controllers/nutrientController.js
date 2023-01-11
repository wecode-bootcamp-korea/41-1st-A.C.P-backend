const { catchAsync } = require("../utils/error");

const nutrientService = require("../services/nutrientService");

const getFilterNutrientData = catchAsync(async (req, res) => {
  const { type } = req.query;

  const FilterNutrientData = await nutrientService.getFilterNutrientData(type);

  res.status(200).json(FilterNutrientData);
});

module.exports = {
  getFilterNutrientData,
};
