const { catchAsync } = require("../utils/error");
const plantService = require("../services/plantService");

const plantListFilterData = catchAsync(async (req, res) => {
  const { species, sizes, positions, moods, difficulties, offset, limit } =
    req.query;

  const data = await plantService.plantListFilterData(
    species,
    sizes,
    positions,
    moods,
    difficulties,
    offset,
    limit
  );

  return res.status(200).json(data);
});

module.exports = {
  plantListFilterData,
};
