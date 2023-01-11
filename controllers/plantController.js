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

module.exports = {
  getPlantInfo,
};
