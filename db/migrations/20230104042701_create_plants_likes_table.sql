-- migrate:up
CREATE TABLE plants_likes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  plant_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT plants_likes_users_id FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT plants_likes_plants_id FOREIGN KEY (plant_id) REFERENCES plants(id)
);

-- migrate:down
DROP TABLE plants_likes;
