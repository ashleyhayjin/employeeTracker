USE employees_db;

INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("FrontEnd");
INSERT INTO department (name)
VALUES ("BackEnd");

INSERT INTO role (title, salary, department_id)
VALUES ("Finance Analyst", 85000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Rep", 55000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Front Developer", 105000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Back End Developer", 125000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Lee", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Ju", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Robertson", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Melissa", "Velasquez", 3, 1);