-- migrate:up
CREATE TABLE pot_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pot_id INT NOT NULL,
    img_url VARCHAR(1000) NULL,
    FOREIGN KEY (pot_id) REFERENCES pots_pot_colors (id)
);

-- migrate:down
DROP TABLE pot_images
