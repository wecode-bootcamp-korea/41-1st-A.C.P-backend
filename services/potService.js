const potDao = require("../models/potDao");

const potsListFilterData = async (size, color, offset, limit) => {
  return potDao.potsListFilterData(size, color, offset, limit);
};

module.exports = {
  potsListFilterData,
};
