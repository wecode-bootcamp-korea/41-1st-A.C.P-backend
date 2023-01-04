-- migrate:up
CREATE TABLE difficulties (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);
-- migrate:down
DROP TABLE difficulties;