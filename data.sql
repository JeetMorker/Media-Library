CREATE DATABASE website;
USE website;

CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

