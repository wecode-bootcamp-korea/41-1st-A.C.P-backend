const nutrientDao = require("../models/nutrientDao");

const getFilterNutrientData = async (type) => {
  return nutrientDao.getFilterNutrientData(type);
};

module.exports = {
  getFilterNutrientData,
};
