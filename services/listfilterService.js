const listfilterDao = require("../models/listfilterDao");

const listfilterData = async (
  species,
  sizes,
  positions,
  moods,
  difficulties
) => {
  return listfilterDao.listfilterData(
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
