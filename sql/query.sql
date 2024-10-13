
-- Create table tasks

CREATE TABLE tasks (
  id_task INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  done BOOLEAN NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP  
);

INSERT INTO tasks (title, description) VALUES (?, ?)
