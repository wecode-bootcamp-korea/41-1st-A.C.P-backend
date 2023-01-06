const { appDataSource } = require("./dbconfig");

const plantsDetails = async (plantsId) => {
  return appDataSource.query(
    `SELECT
          plants.name as plant_name,
          plants.description plant_description,
          plants.price as plant_price,
          species.name as species,
          sizes.name as size,
          positions.name as position,
          moods.name as mood,
          difficulties.name as difficulty,
          plant_images.img_url as img_url,
          cares.name as care
      FROM plants
      INNER JOIN species ON plants.species_id = species.id
      INNER JOIN sizes ON plants.sizes_id = sizes.id
      INNER JOIN positions ON plants.positions_id = positions.id
      INNER JOIN moods ON plants.moods_id = moods.id
      INNER JOIN difficulties ON plants.difficulties_id = difficulties.id
      INNER JOIN plant_images ON plants.id = plant_images.plants_id
      INNER JOIN cares ON plants.cares_id = cares.id
      WHERE plants.id = ?
      `,
    [plantsId]
  );
};

module.exports = {
  plantsDetails,
};
