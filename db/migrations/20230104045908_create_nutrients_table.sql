-- migrate:up
CREATE TABLE nutrients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  nutrient_type_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT nutrients_name_ukey UNIQUE (name),
  CONSTRAINT nutrients_nutrient_type_id FOREIGN KEY (nutrient_type_id) REFERENCES nutrient_types(id)
);
-- migrate:down
DROP TABLE nutrients;
