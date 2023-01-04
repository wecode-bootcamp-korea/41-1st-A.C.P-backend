-- migrate:up
CREATE TABLE review (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content VARCHAR(200) NOT NULL,
  imgurl VARCHAR(200) NOT NULL,
  users_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT review_users_id FOREIGN KEY (users_id) REFERENCES users(id)
);
-- migrate:down
DROP TABLE review;