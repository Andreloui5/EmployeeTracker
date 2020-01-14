const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

function addRole() {
  inquirer.prompt([
    {
      type:"input",
      name:"roleName",
      message:"What role would you like to add?"
    },
    {
      type:"input",
      name:"salary",
      message:"What's the salary for this position?"
    }
  ]).then(res=>{
    let query = "INSERT INTO department (title, salary) VALUES ?"
    connection.query(query + [res.roleName, res.salary]);
    console.log(`Success! ${res.roleName} has been created with a salary of ${res.salary}.`);
    console.log("-------------------");
  }).then (()=>{
    mainApp()
  });
}

module.exports = addRole;