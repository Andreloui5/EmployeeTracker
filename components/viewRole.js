const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connection = require("../db/connection");

function viewRole() {
  //pull all departments from db
  connection.query("SELECT * FROM employee_role", (err,res) => {
    if (err) throw err;
    //go over res, and add each index to an array
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].title);
      // allDepartments.push(res[i].name);
    }
    console.log("-------------------");
  })
}

module.exports = viewRole;