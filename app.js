const connection = require("./db/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

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
          console.log("success");
          break;
      }
    });


}