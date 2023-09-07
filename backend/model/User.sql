-- creates the database
CREATE DATABASE soulmom;

-- enter this line in shell to connect to db: \c soulmom 

-- uuid generate a unique userid for every user 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- creates the table
CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- dummy data 
INSERT INTO users (name,email,password) VALUES ('lys','lys@gmail.com', 'test');