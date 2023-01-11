const potDao = require("../models/potDao");

const listfilterData = async (size, color) => {
  return potDao.listfilterData(size, color);
};

module.exports = {
  listfilterData,
};
