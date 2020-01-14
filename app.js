const connection = require("./db/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const addDept = require("./components/addDept");
const addEmployee = require("./components/addEmployee");
const addRole = require("./components/addRole");
const deleteEmployee = require("./components/deleteEmployee");
const updateEmployeeRole = require("./components/updateEmployeeRole");
const viewDept = require("./components/viewDept");
const viewEmployees = require("./components/viewEmployees");
const viewEmployeesDept = require("./components/viewEmployeesDept");
const viewRole = require("./components/viewRole");

connection.connect(err => {
  if (err) throw err;
  mainApp();
});

function mainApp() {

  inquirer.prompt([
    {
      type:"list",
      name: "task",
      message:"What would you like to do?",
      choices: ["View all employees", "View employees by department", "Add new employee", "Update employee role", "Delete employee", "View all departments", "Add new department", "View all employees", "Exit"]
    }])
    .then(function({task}) {
      // switch statement based on user choice
      switch (task) {
        case "View all employees":
          viewEmployees();
          break;
        case "View employees by department":
          console.log("success");
          break;
        case "Add new employee":
          addEmployee();
          break;
        case "Update employee role":
          addRole();
          break;
        case "Delete employee":
          console.log("success");
          break;
        case "View all departments":
          console.log("success");
          break;
        case "Add new department":
          addDept();

          break;
        case "View all employees":
          console.log("success");
          break;
        case "Exit":
          connection.end();
          break;
      }
    }).then(()=> {
      mainApp();
    });
}
