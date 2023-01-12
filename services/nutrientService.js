const nutrientDao = require("../models/nutrientDao");

const getNutrientInfo = async (nutrientId) => {
  return nutrientDao.getNutrientInfo(nutrientId);
};

const nutrientsListFilterData = async (type, offset, limit) => {
  return nutrientDao.nutrientsListFilterData(type, offset, limit);
};

module.exports = {
  getNutrientInfo,
  nutrientsListFilterData,
};
