const nutrientDao = require("../models/nutrientDao");

const getNutrientInfo = async (nutrientId) => {
  return nutrientDao.getNutrientInfo(nutrientId);
};

module.exports = {
  getNutrientInfo,
};
