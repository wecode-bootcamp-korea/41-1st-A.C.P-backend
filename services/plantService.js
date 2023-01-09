const plantDao = require("../models/plantDao");

const getPlantInfo = async (plantId) => {
  return plantDao.getPlantInfo(plantId);
};

module.exports = {
  getPlantInfo,
};
