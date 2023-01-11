const { catchAsync } = require("../utils/error");

const potService = require("../services/potService");

const potsListFilterData = catchAsync(async (req, res) => {
  const { size, color, offset, limit } = req.query;

  const potsListFilterData = await potService.potsListFilterData(
    size,
    color,
    offset,
    limit
  );

  res.status(200).json(potsListFilterData);
});

module.exports = {
  potsListFilterData,
};
