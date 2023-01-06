const { catchAsync } = require("../utils/error");

const plantService = require("../services/plantService");

const plantsDetails = catchAsync(async (req, res) => {
  const { plantId } = req.params;
  if (!plantId) {
    throw new Error("KEY_ERROR");
  }

  const plantsDetails = await plantService.plantsDetails(plantId);

  res.status(201).json({ message: plantsDetails });
});

module.exports = {
  plantsDetails,
};
