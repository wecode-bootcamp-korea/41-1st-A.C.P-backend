-- migrate:up
CREATE TABLE nutrients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  nutrientsTypes_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT nutrients_name_ukey UNIQUE (name),
  CONSTRAINT nutrients_nutrientsTypes_id FOREIGN KEY (nutrientsTypes_id) REFERENCES nutrientsTypes(id)
);
-- migrate:down
DROP TABLE nutrients;
