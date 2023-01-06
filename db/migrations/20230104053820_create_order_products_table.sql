-- migrate:up
CREATE TABLE order_products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  product_id INT NOT NULL,
  order_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT order_products_products_id FOREIGN KEY (product_id) REFERENCES products(id),
  CONSTRAINT order_products_orders_id FOREIGN KEY (order_id) REFERENCES orders(id)
);
-- migrate:down
DROP TABLE order_products;