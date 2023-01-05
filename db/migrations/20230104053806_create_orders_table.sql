-- migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  uuid INT NOT NULL,
  total_price DECIMAL(10,3) NOT NULL,
  users_id INT NOT NULL,
  ordersStatus_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT orders_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT orders_ordersStatus_id FOREIGN KEY (ordersStatus_id) REFERENCES ordersStatus(id)
);
-- migrate:down
DROP TABLE orders;