-- migrate:up
CREATE TABLE pots_pot_colors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pots_id INT NOT NULL,
  pot_colors_id INT NOT NULL,
  plants_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT pots_pot_colors_pots_id FOREIGN KEY (pots_id) REFERENCES pots(id),
  CONSTRAINT pots_pot_colors_id FOREIGN KEY (pot_colors_id) REFERENCES pot_colors(id),
  CONSTRAINT pots_pot_colors_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE pots_pot_colors;