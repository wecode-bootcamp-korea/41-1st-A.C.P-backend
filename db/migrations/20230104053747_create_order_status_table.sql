-- migrate:up
CREATE TABLE order_status (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(200) NOT NULL,
  CONSTRAINT order_status_type_ukey UNIQUE (type)
);
-- migrate:down
DROP TABLE order_status;
