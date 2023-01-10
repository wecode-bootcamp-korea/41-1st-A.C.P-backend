const { appDataSource } = require("./dbconfig");

const getPlantInfo = async (plantsId) => {
  return appDataSource.query(
    `SELECT 
      plants.id as plant_id,
      plants.name as plant_name,
      plants.description plant_description,
      plants.price as plant_price,
      species.name as species,
      sizes.name as size,
      positions.name as position,
      moods.name as mood,
      difficulties.name as difficulty,         
      cares.name as care,
      JSON_ARRAYAGG(JSON_OBJECT("img_id",plant_images.id,"img_url",plant_images.img_url))as images
    FROM plants
    JOIN species ON plants.species_id = species.id
    JOIN sizes ON plants.size_id = sizes.id
    JOIN positions ON plants.position_id = positions.id
    JOIN moods ON plants.mood_id = moods.id
    JOIN difficulties ON plants.difficulty_id = difficulties.id
    JOIN cares ON plants.care_id = cares.id
    JOIN plant_images ON plant_images.plant_id=plants.id
    where plants.id= ?
    GROUP BY plants.id;
      `,
    [plantsId]
  );
};

module.exports = {
  getPlantInfo,
};
