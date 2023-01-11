const { appDataSource } = require("./dbconfig");

const plantsList = async (sort, offset, limit) => {
  const sortMethod = Object.freeze({
    cheap: "plants.price ASC",
    expensive: "plants.price DESC",
    new: "plants.created_at DESC",
    old: "plants.created_at ASC",
    nameASC: "plants.name ASC",
    nameDESC: "plants.name DESC",
  });

  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const plantsList = await queryRunner.query(
      `SELECT SQL_CALC_FOUND_ROWS
        plants.id AS plant_id,
        plants.name AS plant_name,
        plants.price as plant_price,
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
      LIMIT ${limit} OFFSET ${offset}`
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
  plantsList,
};
