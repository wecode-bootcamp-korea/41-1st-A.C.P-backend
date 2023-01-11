const nutrientDao = require("../models/nutrientDao");

const nutrientsListFilterData = async (type, offset, limit) => {
  return nutrientDao.nutrientsListFilterData(type, offset, limit);
};

module.exports = {
  nutrientsListFilterData,
};
