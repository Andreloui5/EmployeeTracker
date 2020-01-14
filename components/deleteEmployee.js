const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connection = require("../db/connection");

function deleteEmployee() {
  //query for a full list of Employees
  let query = "SELECT * FROM employee ORDER BY id";
  
  let employeeList = connection.query(query)

  inquirer.prompt([
    {
      type:""
    }
  ])
}

module.exports = deleteEmployee;