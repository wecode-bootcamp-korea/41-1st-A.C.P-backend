const potsDao = require("../models/potsDao");

const potsDetails = async (postId) => {
  return potsDao.potsDetails(potsId);
};

module.exports = {
  potsDetails,
};
