-- migrate:up
CREATE TABLE pot_sizes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
-- migrate:down
DROP TABLE pot_sizes;