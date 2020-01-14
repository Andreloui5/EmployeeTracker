const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

function addEmployee() {
  inquirer.prompt([
    {
      type:"input",
      name:"firstName",
      message:"What's the employee's first name?"
    },
    {
      type:"input",
      name:"lastName",
      message:"What's the employee's last name?"
    }
  ]).then(res=>{
    let query = "INSERT INTO employee (first_name, last_name) VALUES ?"
    connection.query(query + [res.firstName, res.lastName]);
    console.log(`Success! ${res.firstName} ${res.lastName} has been created.`);
    console.log("-------------------");
  }).then (()=>{
    mainApp()
  });
};

module.exports = addEmployee;