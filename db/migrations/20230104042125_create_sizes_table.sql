-- migrate:up
CREATE TABLE sizes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
-- migrate:down
DROP TABLE sizes;