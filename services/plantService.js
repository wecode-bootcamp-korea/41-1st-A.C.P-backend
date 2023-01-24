const plantDao = require("../models/plantDao");

const getPlantInfo = async (plantId) => {
  return plantDao.getPlantInfo(plantId);
};

const plantsList = async (sort, offset, limit) => {
  return plantDao.plantsList(sort, offset, limit);
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

const plantDataSearching = async (content) => {
  return plantDao.plantDataSearching(content);
};

module.exports = {
  getPlantInfo,
  plantsList,
  plantListFilterData,
  plantDataSearching,
};
