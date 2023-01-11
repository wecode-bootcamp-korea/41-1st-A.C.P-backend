const { catchAsync } = require("../utils/error");

const nutrientService = require("../services/nutrientService");

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
  nutrientsListFilterData,
};
