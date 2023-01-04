-- migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  users_id INT NOT NULL,
  products_id INT NOT NULL,
  ordersStatus_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT orders_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT orders_products_id FOREIGN KEY (products_id) REFERENCES products(id),
  CONSTRAINT orders_ordersStatus_id FOREIGN KEY (ordersStatus_id) REFERENCES ordersStatus(id)
);
-- migrate:down
DROP TABLE orders;