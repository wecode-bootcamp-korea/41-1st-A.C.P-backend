-- migrate:up
CREATE TABLE species (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);
-- migrate:down
DROP TABLE species;