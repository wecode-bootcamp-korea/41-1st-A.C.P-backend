const potsDao = require("../models/potsDao");

const potsDetails = async (postId) => {
  const potsDetails = await potsDao.potsDetails(potsId);

  return potsDetails;
};

module.exports = {
  potsDetails,
};
