const plantService = require("../services/plantService");

const plantsDetails = async (req, res) => {
  try {
    const { plantId } = req.params;
    if (!plantId) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    const plantsDetails = await plantService.plantsDetails(plantId);

    res.status(201).json({ message: plantsDetails });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  plantsDetails,
};
