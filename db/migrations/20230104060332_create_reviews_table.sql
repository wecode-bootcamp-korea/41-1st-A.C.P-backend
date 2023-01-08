-- migrate:up
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content VARCHAR(1000) NOT NULL,
  img_url VARCHAR(1000) NOT NULL,
  user_id INT NOT NULL,
  plant_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT reviews_user_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT reviews_plant_id FOREIGN KEY (plant_id) REFERENCES plants(id)
);
-- migrate:down
DROP TABLE reviews;