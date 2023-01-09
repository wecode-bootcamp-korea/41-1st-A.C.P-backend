-- migrate:up
CREATE TABLE pots_pot_colors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pot_id INT NOT NULL,
  pot_color_id INT NOT NULL,
  CONSTRAINT pots_pot_colors_pot_id FOREIGN KEY (pot_id) REFERENCES pots(id),
  CONSTRAINT pots_pot_colors_pot_color_id FOREIGN KEY (pot_color_id) REFERENCES pot_colors(id),
  CONSTRAINT pots_pot_colors_plant_id FOREIGN KEY (plant_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE pots_pot_colors;