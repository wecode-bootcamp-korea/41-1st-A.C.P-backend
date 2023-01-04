-- migrate:up
CREATE TABLE species (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  CONSTRAINT species_name_ukey UNIQUE (name)
);
-- migrate:down
DROP TABLE species;