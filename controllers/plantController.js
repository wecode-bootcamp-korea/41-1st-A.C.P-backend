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

const plantsList = catchAsync(async (req, res) => {
  const { sort, offset, limit } = req.query;

  const data = await plantService.plantsList(sort, offset, limit);

  return res.status(200).json(data);
});

module.exports = {
  getPlantInfo,
  plantsList,
};
