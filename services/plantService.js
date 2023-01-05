const plantDao = require("../models/plantDao");

const plantsDetails = async (plantId) => {
  const plantsDetails = await plantDao.plantsDetails(plantId);

  return plantsDetails;
};

module.exports = {
  plantsDetails,
};
