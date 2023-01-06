-- migrate:up
CREATE TABLE orderstatus (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(200) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT orderstatus_type_ukey UNIQUE (type)
);
-- migrate:down
DROP TABLE orderstatus;
