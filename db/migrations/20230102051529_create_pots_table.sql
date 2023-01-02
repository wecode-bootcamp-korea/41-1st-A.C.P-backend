-- migrate:up
CREATE TABLE pots (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    grey INT NOT NULL,
    brown INT NOT NULL,
    brick INT NOT NULL,
    price INT NOT NULL,
    prod_id INT NOT NULL, 
    FOREIGN KEY (prod_id) REFERENCES PRODUCT (id);
)

-- migrate:down
DROP TABLE pots;