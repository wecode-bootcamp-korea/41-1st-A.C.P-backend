const plantDao = require("../models/plantDao");

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
  plantListFilterData,
};
