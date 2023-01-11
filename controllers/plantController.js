const { catchAsync } = require("../utils/error");
const plantService = require("../services/plantService");

const plantsList = catchAsync(async (req, res) => {
  const { sort, offset, limit } = req.query;

  const data = await plantService.plantsList(sort, offset, limit);

  return res.status(200).json(data);
});

module.exports = {
  plantsList,
};
