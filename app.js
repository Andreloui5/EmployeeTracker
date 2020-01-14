const connection = require("./db/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const addDept = require("./assets/addDept");
const addEmployee = require("./assets/addEmployee");
const addRole = require("./assets/addRole");
const deleteEmployee = require("./assets/deleteEmployee");
const updateEmployeeRole = require("./assets/updateEmployeeRole");
const viewDept = require("./assets/viewDept");
const viewEmployee = require("./assets/viewEmployee");
const viewEmployeesDept = require("./assets/viewEmployeesDept");
const viewRole = require("./assets/viewRole");

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
      choices: ["View all employees", "View employees by department", "Add new employee", "Update employee role", "Delete employee", "View all departments", "Add new department", "View all employees"]
    }])
    .then(function({task}) {
      // switch statement based on user choice
      switch (task) {
        case "View all employees":
          viewEmployee();
          mainApp();
          break;
        case "View employees by department":
          console.log("success");
          break;
        case "Add new employee":
          console.log("success");
          break;
        case "Update employee role":
          console.log("success");
          break;
        case "Delete employee":
          console.log("success");
          break;
        case "View all departments":
          console.log("success");
          break;
        case "Add new department":
          console.log("success");
          break;
        case "View all employees":
          console.log("success");
          break;
      }
    });
}
