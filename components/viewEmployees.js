const connection = require("../db/connection")
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

function viewEmployees() {

  //selects employee info and joins employee role and dept
  let query = "SELECT employee.id, employee.first_name, employee_role.title, department.name as 'Department', employee_role.salary, (SELECT CONCAT(employee.first_name, employee.last_name ";
    query += "FROM employee WHERE employee.manager_id = employee.id) as 'Manager' FROM employee JOIN employee_role on employee.role_id = employee_role.id ";
    query += "JOIN department ON department.id = employee_role.department_id;"
  
    connection.query(query, function (err, res) {
      if (err) throw err;
      //loop through the response
      for (i=0;i<res.length;i++) {
        //console log response for each index
        console.table(res[i]);
      };
      mainApp();
    })
};

module.exports = viewEmployees;