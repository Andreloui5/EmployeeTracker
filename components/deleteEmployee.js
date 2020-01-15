const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connection = require("../db/connection");

function deleteEmployee() {
  let allEmployees = connection.query("SELECT * FROM employee")

  console.table(allEmployees);
//   inquirer.prompt([
//     {
//       type:"list",
//       name:"deleteEmployee",
//       message:"Which employee would you like to delete?",
//       choices:[allEmployees]
//     }
//   ]).then(res=>{
//     let query = "INSERT INTO department (title, salary) VALUES (?)"
//     connection.query(query + [res.roleName, res.salary]);
//     console.log(`Success! ${res.roleName} has been created with a salary of ${res.salary}.`);
//     console.log("-------------------");
//   });
}

module.exports = deleteEmployee;