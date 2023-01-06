-- migrate:up
CREATE TABLE plant_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  img_url VARCHAR(1000) NOT NULL,
  plants_id INT NOT NULL,
  CONSTRAINT plant_images_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE plant_images;