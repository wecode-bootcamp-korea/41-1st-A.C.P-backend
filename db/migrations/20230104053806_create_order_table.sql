-- migrate:up
CREATE TABLE order (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  users_id INT NOT NULL,
  products_id INT NOT NULL,
  orderStatus_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT order_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT order_products_id FOREIGN KEY (products_id) REFERENCES products(id),
  CONSTRAINT order_orderStatus_id FOREIGN KEY (orderStatus_id) REFERENCES orderStatus(id)
);
-- migrate:down
DROP TABLE order;