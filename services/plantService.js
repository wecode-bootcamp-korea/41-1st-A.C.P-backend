const plantDao = require("../models/plantDao");

const getPlantInfo = async (plantId) => {
  return plantDao.getPlantInfo(plantId);
};

const plantsList = async (sort, offset, limit) => {
  return plantDao.plantsList(sort, offset, limit);
};

module.exports = {
  getPlantInfo,
  plantsList,
};
