const plantDao = require("../models/plantDao");

const getPlantInfo = async (plantId) => {
  return plantDao.getPlantInfo(plantId);
};

const plantListFilterData = async (
  species,
  sizes,
  positions,
  moods,
  difficulties,
  offset,
  limit
) => {
  return plantDao.plantListFilterData(
    species,
    sizes,
    positions,
    moods,
    difficulties,
    offset,
    limit
  );
};

module.exports = {
  getPlantInfo,
  plantListFilterData,
};
