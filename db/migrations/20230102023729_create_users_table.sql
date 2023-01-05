-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  name VARCHAR(30) NOT NULL,
  phone_number VARCHAR(30) NOT NULL,
  address VARCHAR(200) NULL,
  point INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT users_ukey UNIQUE (email),
  CONSTRAINT phoneNumber_ukey UNIQUE (phoneNumber)
);
-- migrate:down
DROP TABLE users;
