-- migrate:up
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content VARCHAR(1000) NOT NULL,
  img_url VARCHAR(200) NOT NULL,
  users_id INT NOT NULL,
  plants_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT reviews_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT reviews_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE reviews;  