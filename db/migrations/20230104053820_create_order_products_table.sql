-- migrate:up
CREATE TABLE order_products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  plant_id INT NULL,
  plant_quantity INT NULL,
  pots_pot_color_id INT NULL,
  pot_quantity INT NULL,
  nutrient_id INT NULL,
  nutrient_quantity INT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT order_products_order_id FOREIGN KEY (order_id) REFERENCES orders(id),
  CONSTRAINT order_products_plant_id FOREIGN KEY (plant_id) REFERENCES plants(id),
  CONSTRAINT order_products_pots_pot_color_id FOREIGN KEY (pots_pot_color_id) REFERENCES pots_pot_colors(id),
  CONSTRAINT order_products_nutrient_id FOREIGN KEY (nutrient_id) REFERENCES nutrients(id)
  
);
-- migrate:down
DROP TABLE order_products;