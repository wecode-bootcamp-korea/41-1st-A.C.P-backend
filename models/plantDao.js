const { appDataSource } = require("./dbconfig");

const queryBuilder = (
  species,
  sizes,
  positions,
  moods,
  difficulties,
  offset,
  limit
) => {
  let andclause = "";

  if (species) {
    andclause =
      andclause + `WHERE plants.species_id = (${species.toString()})\n`;
  }

  if (sizes) {
    andclause = andclause + `AND plants.size_id IN (${sizes.toString()})\n`;
  }

  if (positions) {
    andclause =
      andclause + `AND plants.position_id IN (${positions.toString()})\n`;
  }

  if (moods) {
    andclause = andclause + `AND plants.mood_id IN (${moods.toString()})\n`;
  }

  if (difficulties) {
    andclause =
      andclause + `AND plants.difficulty_id IN (${difficulties.toString()})\n`;
  }

  andclause = andclause + `GROUP BY plants.id\n`;
  andclause = andclause + `ORDER BY plants.id\n`;

  if (limit) {
    andclause = andclause + `LIMIT ${limit} `;
  }

  if (offset) {
    andclause = andclause + `OFFSET ${offset}\n`;
  }

  return andclause;
};

const plantListFilterData = async (
  species,
  sizes,
  positions,
  moods,
  difficulties,
  offset,
  limit
) => {
  const andquery = await queryBuilder(
    species,
    sizes,
    positions,
    moods,
    difficulties,
    offset,
    limit
  );

  console.log(offset, limit);
  console.log(moods);
  const plantsList = await appDataSource.query(
    `SELECT
        plants.id as plant_id,
        plants.name as plant_name,
        plants.description as plant_description,
        plants.price as plant_price,
        species.name as species,
        sizes.name as size,
        positions.name as position,
        moods.name as mood,
        difficulties.name as difficulty,
        cares.name as care
      FROM plants
      JOIN species ON plants.species_id = species.id
      JOIN sizes ON plants.size_id = sizes.id
      JOIN positions ON plants.position_id = positions.id
      JOIN moods ON plants.mood_id = moods.id
      JOIN difficulties ON plants.difficulty_id = difficulties.id
      JOIN cares ON plants.care_id = cares.id
      ${andquery}
      ;
      `,
    [limit, offset]
  );

  const [totalCount] = await appDataSource.query(
    `SELECT FOUND_ROWS() AS totalCount`
  );

  return { plantsList, totalCount };
};

const getPlantInfo = async (plantsId) => {
  const [plantInfodata] = await appDataSource.query(
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
      cares.name as care
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
  return plantInfodata;
};

const plantsList = async (sort, offset, limit) => {
  const sortMethod = Object.freeze({
    cheap: "plants.price ASC",
    expensive: "plants.price DESC",
    new: "plants.created_at DESC",
    old: "plants.created_at ASC",
    nameASC: "plants.name ASC",
    nameDESC: "plants.name DESC",
  });

  const plantsList = await appDataSource.query(
    `SELECT
      plants.id AS plant_id,
      plants.name AS plant_name,
      plants.price as plant_price
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'url', plant_images.img_url
        )
      ) as plant_img,
      plants.created_at as plant_created_at
    FROM plants
    JOIN plant_images ON plants.id = plant_images.plant_id
    GROUP BY plants.id
    ORDER BY ${sortMethod[sort]}
    LIMIT ${limit} OFFSET ${offset};`
  );

  const [totalCount] = await appDataSource.query(
    `SELECT FOUND_ROWS() AS totalCount;`
  );
  return { plantsList, totalCount };
};

module.exports = {
  getPlantInfo,
  plantsList,
  plantListFilterData,
};
