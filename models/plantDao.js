const { appDataSource } = require("./dbconfig");

const plantsDetails = async (plantsId) => {
  try {
    return await appDataSource.query(
      `SELECT
          plants.name,
          plants.description,
          plants.price,
          species.name,
          sizes.name,
          positions.name,
          moods.name,
          difficulties.name,
          plantsimg.img_url,
          cares.name
      FROM plants
      INNER JOIN species ON plants.species_id = species.id
      INNER JOIN sizes ON plants.sizes_id = sizes.id
      INNER JOIN positions ON plants.positions_id = positions.id
      INNER JOIN moods ON plants.moods_id = moods.id
      INNER JOIN difficulties ON plants.difficulties_id = difficulties.id
      INNER JOIN plantsimg ON plants.id = plantsimg.plants_id
      INNER JOIN cares ON plants.cares_id = cares.id
      WHERE plants.id = ?
      `,
      [plantsId]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  plantsDetails,
};
