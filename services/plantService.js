const plantDao = require("../models/plantDao");

const getPlantInfo = async (plantId) => {
  const PlantInfo = await plantDao.getPlantInfo(plantId);

  return PlantInfo;
};

module.exports = {
  getPlantInfo,
};
