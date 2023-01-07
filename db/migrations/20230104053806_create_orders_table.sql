-- migrate:up
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  order_number VARCHAR(200),
  total_price DECIMAL(10,3) NOT NULL,
  user_id INT NOT NULL,
  order_status_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT orders_user_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT orders_order_status_id FOREIGN KEY (order_status_id) REFERENCES order_status(id)
);
-- migrate:down
DROP TABLE orders;