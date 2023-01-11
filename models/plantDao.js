const { appDataSource } = require("./dbconfig");
const queryBuilder = (species, sizes, positions, moods, difficulties) => {
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

  if (!sizes && !positions && !moods && !difficulties) {
    andclause += ";";
  }

  return andclause;
};

const listfilterData = async (
  species,
  sizes,
  positions,
  moods,
  difficulties
) => {
  const andquery = await queryBuilder(
    species,
    sizes,
    positions,
    moods,
    difficulties
  );

  const data = await appDataSource.query(
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
        `
  );
  return data;
};

module.exports = {
  listfilterData,
};
