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

  if (limit) {
    andclause = andclause + `LIMIT ${limit}\n`;
  }

  if (offset) {
    andclause = andclause + `OFFSET ${offset}\n`;
  }

  if (!sizes && !positions && !moods && !difficulties && !limit && !offset) {
    andclause += ";";
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

  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const plantsList = await queryRunner.query(
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

    const [totalCount] = await queryRunner.query(
      `SELECT FOUND_ROWS() AS totalCount`
    );

    return { plantsList, totalCount };
  } catch (err) {
    console.log(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  plantListFilterData,
};
