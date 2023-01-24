const potDao = require("../models/potDao");

const potsListFilterData = async (size, color, offset, limit) => {
  return potDao.potsListFilterData(size, color, offset, limit);
};

const getPotInfo = async (potId) => {
  return potDao.getPotInfo(potId);
};

module.exports = {
  potsListFilterData,
  getPotInfo,
};
