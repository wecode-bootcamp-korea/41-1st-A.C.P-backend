-- migrate:up
CREATE TABLE plantsimg (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  imgurl VARCHAR(200) NOT NULL,
  plants_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT plantsimg_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE plantsimg;