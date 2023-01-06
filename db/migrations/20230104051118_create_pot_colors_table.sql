-- migrate:up
CREATE TABLE pot_colors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  color VARCHAR(30) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT pot_colors_coler_ukey UNIQUE (color)
);
-- migrate:down
DROP TABLE pot_colors;