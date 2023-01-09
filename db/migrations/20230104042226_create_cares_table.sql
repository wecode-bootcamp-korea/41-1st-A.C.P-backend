-- migrate:up
CREATE TABLE cares (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
-- migrate:down
DROP TABLE cares;