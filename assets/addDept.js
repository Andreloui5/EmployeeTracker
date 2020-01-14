const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

function addDept() {
  inquirer.prompt([
    {
      type:"input",
      name:"deptName",
      message:"What department would you like to add?"
    }
  ]).then(res=>{
    let query = "INSERT INTO department (first_name, last_name) VALUES ?"
    connection.query(query + [res.deptName]);
    console.log(`Success! The department ${res.deptName}  has been created.`);
    console.log("-------------------");
  }).then (()=>{
    mainApp()
  });
};


module.exports = addDept;