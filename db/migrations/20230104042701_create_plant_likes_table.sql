-- migrate:up
CREATE TABLE plant_likes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  users_id INT NOT NULL,
  plants_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT plant_likes_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT plant_likes_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);

-- migrate:down
DROP TABLE plant_likes;
