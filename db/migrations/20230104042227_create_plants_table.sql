-- migrate:up
CREATE TABLE plants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  species_id INT NOT NULL,
  sizes_id INT NOT NULL,
  moods_id INT NOT NULL,
  positions_id INT NOT NULL,
  difficulties_id INT NOT NULL, 
  cares_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT plants_species_id FOREIGN KEY (species_id) REFERENCES species(id),
  CONSTRAINT plants_sizes_id FOREIGN KEY (sizes_id) REFERENCES sizes(id),
  CONSTRAINT plants_moods_id FOREIGN KEY (moods_id) REFERENCES moods(id),
  CONSTRAINT plants_positions_id FOREIGN KEY (positions_id) REFERENCES positions(id),
  CONSTRAINT plants_difficulties_id FOREIGN KEY (difficulties_id) REFERENCES difficulties(id),
  CONSTRAINT plants_cares_id FOREIGN KEY (cares_id) REFERENCES cares(id),
  CONSTRAINT plants_ukey_name UNIQUE (name)
);

-- migrate:down
DROP TABLE plants;
