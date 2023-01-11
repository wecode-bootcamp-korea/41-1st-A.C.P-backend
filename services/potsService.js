const potsDao = require("../models/potsDao");

const getPotInfo = async (potId) => {
  return potsDao.getPotInfo(potId);
};

module.exports = {
  getPotInfo,
};
