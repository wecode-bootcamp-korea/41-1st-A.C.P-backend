-- migrate:up
CREATE TABLE orderStatus (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(200) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT orderStatus_type_ukey UNIQUE (type)
);
-- migrate:down
DROP TABLE orderStatus;
