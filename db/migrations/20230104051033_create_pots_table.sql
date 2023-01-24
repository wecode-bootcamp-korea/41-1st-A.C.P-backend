-- migrate:up
CREATE TABLE pots (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL, 
  description VARCHAR(1000) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  pot_size_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT pots_name_ukey UNIQUE (name),
  CONSTRAINT pots_pot_size_id FOREIGN KEY (pot_size_id) REFERENCES pot_sizes(id)
);
-- migrate:down
DROP TABLE pots;
