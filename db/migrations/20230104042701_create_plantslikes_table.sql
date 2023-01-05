-- migrate:up
CREATE TABLE plantslikes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  users_id INT NOT NULL,
  plants_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT plantslikes_users_id FOREIGN KEY (users_id) REFERENCES users(id),
  CONSTRAINT plantslikes_plants_id FOREIGN KEY (plants_id) REFERENCES plants(id)
);

-- migrate:down
DROP TABLE plantslikes;
