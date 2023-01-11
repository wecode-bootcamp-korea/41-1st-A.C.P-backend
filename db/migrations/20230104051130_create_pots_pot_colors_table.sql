-- migrate:up
CREATE TABLE pots (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  img_url VARCHAR(1000) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT pots_name_ukey UNIQUE (name)
-- migrate:down
DROP TABLE pots_pot_colors;