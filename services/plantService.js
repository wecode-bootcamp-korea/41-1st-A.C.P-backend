const plantDao = require("../models/plantDao");

const plantsList = async (sort, offset, limit) => {
  return plantDao.plantsList(sort, offset, limit);
};

module.exports = {
  plantsList,
};
