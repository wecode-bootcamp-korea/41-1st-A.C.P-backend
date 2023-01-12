const { catchAsync } = require("../utils/error");
const plantService = require("../services/plantService");

const getPlantInfo = catchAsync(async (req, res) => {
  const { plantId } = req.params;
  if (!plantId) {
    throw new Error("KEY_ERROR");
  }

  const plantInfo = await plantService.getPlantInfo(plantId);

  res.status(200).json(plantInfo);
});

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
  getPlantInfo,
  plantListFilterData,
};
