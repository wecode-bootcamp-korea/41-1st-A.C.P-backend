-- migrate:up
CREATE TABLE order_products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  products_id INT NOT NULL,
  orders_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT order_products_products_id FOREIGN KEY (products_id) REFERENCES products(id),
  CONSTRAINT order_products_order_id FOREIGN KEY (orders_id) REFERENCES orders(id)
);
-- migrate:down
DROP TABLE order_products;