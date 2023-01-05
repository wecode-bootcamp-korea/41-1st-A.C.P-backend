-- migrate:up
CREATE TABLE potsColors (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  color VARCHAR(200) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT potsColors_coler_ukey UNIQUE (color)
);
-- migrate:down
DROP TABLE potsColors;