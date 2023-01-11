const { catchAsync } = require("../utils/error");
const plantService = require("../services/plantService");

const listfilterData = catchAsync(async (req, res) => {
  const { species, sizes, positions, moods, difficulties } = req.query;

  const data = await plantService.listfilterData(
    species,
    sizes,
    positions,
    moods,
    difficulties
  );

  return res.status(200).json(data);
});

module.exports = {
  listfilterData,
};
