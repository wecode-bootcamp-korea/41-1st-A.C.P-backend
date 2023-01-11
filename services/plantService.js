const plantDao = require("../models/plantDao");

const listfilterData = async (
  species,
  sizes,
  positions,
  moods,
  difficulties
) => {
  return plantDao.listfilterData(
    species,
    sizes,
    positions,
    moods,
    difficulties
  );
};

module.exports = {
  listfilterData,
};
