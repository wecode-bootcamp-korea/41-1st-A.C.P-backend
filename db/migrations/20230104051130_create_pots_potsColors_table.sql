-- migrate:up
CREATE TABLE pots_potsColors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pots_id INT NOT NULL,
  potsColors_id INT NOT NULL,
  plants_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT pots_potsColors_pots_id FOREIGN KEY (pots_id) REFERENCES pots(id),
  CONSTRAINT pots_potsColors_potsColors_id FOREIGN KEY (potsColors_id) REFERENCES potsColors(id),
  CONSTRAINT pots_potsColors_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE pots_potsColors;