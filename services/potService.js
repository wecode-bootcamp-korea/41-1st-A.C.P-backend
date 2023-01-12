const potDao = require("../models/potDao");

const getPotInfo = async (potId) => {
  return potDao.getPotInfo(potId);
};

module.exports = {
  getPotInfo,
};
