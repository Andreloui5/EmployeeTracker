DROP DATABASE IF EXISTS employeesDB;
CREATE DATABASE employeesDB;
USE employeesDB;
CREATE TABLE department (
  -- Creates an id not null as primary key
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Creates name
  name VARCHAR(30)
);
CREATE TABLE employee_role (
  -- Creates an id not null as primary key
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Creates a title (using character)
  title VARCHAR(30),
    -- creates salary (w decimal)
    salary DECIMAL(15,2),
    -- creates a department id (int)
    department_id INT,
    -- index the dep. id
    INDEX department_id (department_id),
    -- creates a for key that references the department id
    FOREIGN KEY (department_id) REFERENCES department(id) on DELETE CASCADE
);


CREATE TABLE employee (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INTEGER,
	manager_id INTEGER,
	INDEX role_id (role_id),
	INDEX manager_id (manager_id),
	FOREIGN KEY (role_id) REFERENCES employee_role(id) on DELETE CASCADE,
	FOREIGN KEY (manager_id) REFERENCES employee_role(id) on DELETE CASCADE
);

USE employeesDB;

INSERT INTO department (name)
VALUES ("IT");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO employee (first_name, last_name)
VALUES ("Ben", "Solo");

INSERT INTO employee (first_name, last_name)
VALUES ("Rey", "Palpatine");

SELECT * FROM department;

SELECT * FROM employee_role;

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Programmer", 70000, 1);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Head of Sales", 90000, 2);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Graphic Designer", 50000, 3);