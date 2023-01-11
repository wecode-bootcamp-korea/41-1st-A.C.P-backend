const potsDao = require("../models/potsDao");

const getPotList = async (potsId) => {
  return await potsDao.getPotList(potsId);
};

module.exports = {
  getPotList,
};
