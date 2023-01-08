-- migrate:up
CREATE TABLE carts (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
plant_id INT NULL,
plant_quantity INT NULL,
pot_id INT NULL,
pot_quantity INT NULL,
nutrient_id INT NULL,
nutrient_quantity INT NULL,
created_at TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT carts_users_id FOREIGN KEY (users_id) REFERENCES users(id),
CONSTRAINT carts_products_id FOREIGN KEY (products_id) REFERENCES products(id),
CONSTRAINT carts_plant_id_ukey UNIQUE (plant_id),
CONSTRAINT carts_pot_id_ukey UNIQUE (pot_id),
CONSTRAINT carts_nutrient_id_ukey UNIQUE(nutrient_id)
);
-- migrate:down
DROP TABLE carts;