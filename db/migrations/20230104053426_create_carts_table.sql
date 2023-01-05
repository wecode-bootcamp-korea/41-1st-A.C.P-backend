-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  users_id INT NOT NULL,
  products_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT carts_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT carts_products_id FOREIGN KEY (products_id) REFERENCES products(id)
);
-- migrate:down
DROP TABLE carts;