-- migrate:up
CREATE TABLE ordersStatus (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(200) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT ordersStatus_type_ukey UNIQUE (type)
);
-- migrate:down
DROP TABLE ordersStatus;
