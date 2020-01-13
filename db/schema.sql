DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

CREATE TABLE department (
  -- Creates an id not null as primary key
  id NOT NULL PRIMARY KEY,
  -- Creates name
  name VARCHAR(30)
);

CREATE TABLE employee_role (
  -- Creates an id not null as primary key
  id NOT NULL PRIMARY KEY,
  -- Creates a title (using character)
  title VARCHAR(30),
    --creates salary (w decimal)
    salary DECIMAL(15,2),
    --creates a department id (int)
    department_id INT,
    --index the dep. id
    index department_id (department_id),
    -- creates a for key that references the department id
    FOREIGN KEY (department_id) REFERENCES department_id(id) on DELETE CASCADE
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
index role_id (role_id),
index manager_id (manager_id),
FOREIGN KEY (role_id) REFERENCES employee_role(id) on DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee_role(id) on DELETE CASCADE,
)