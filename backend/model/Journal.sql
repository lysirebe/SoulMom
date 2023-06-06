CREATE TABLE journal(
  journal_id SERIAL PRIMARY KEY,
  user_id uuid,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  title VARCHAR(255),
  entry VARCHAR(255),
  CONSTRAINT fk_user
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- dummy data 
INSERT INTO journal (title,entry) VALUES ('soulEntry number 1','decided to migrate my soul mom app away from php and instead use the PERN stack. the goal is to get all routes working. connect to basic react front end and then deploy on docker');

ALTER TABLE journal
ALTER COLUMN title DROP NOT NULL;

-- {
--     "title": "you cant be creative without taking risks ",
--     "entry": "watching content and media thant invokes inspiration and curiosity, and exposes you to new realms of thinking is what i love"
-- }