CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  plants_id INT NOT NULL,
  pots_id INT NOT NULL,
  nutrients_id INT NOT NULL,
  users_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT products_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id),
  CONSTRAINT products_pots_id FOREIGN KEY (pots_id) REFERENCES pots(id),
  CONSTRAINT products_nutrients_id FOREIGN KEY (nutrients_id) REFERENCES nutrients(id),
  CONSTRAINT products_users_id FOREIGN KEY (users_id) REFERENCES users(id)
);
-- migrate:down
DROP TABLE products;