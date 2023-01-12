-- migrate:up
CREATE TABLE nutrient_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  img_url VARCHAR(1000) NOT NULL,
  nutrient_id INT NOT NULL,
  CONSTRAINT nutrient_images_nutrient_id FOREIGN KEY (nutrient_id) REFERENCES nutrients(id)
);
-- migrate:down
DROP TABLE nutrient_images;
