-- migrate:up
CREATE TABLE pot_colors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  color VARCHAR(30) NOT NULL,
  CONSTRAINT pot_colors_coler_ukey UNIQUE (color)
);
-- migrate:down
DROP TABLE pot_colors;