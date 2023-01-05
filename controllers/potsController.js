const potsService = require("../services/potsService");

const potsDetails = async (req, res) => {
  try {
    const { potsId } = req.params;
    if (!potsId) {
      return res.status(400).json({ messagae: "KEY_ERROR" });
    }
    const potsDetails = await potsService.potsDetails(potsId);

    res.status(201).json({ message: potsDetails });
  } catch (err) {
    console.error(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  potsDetails,
};
