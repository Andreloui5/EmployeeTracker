const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connection = require("../db/connection");

function viewDept() {
  //declare needed array
  // let allDepartments = [];
  //pull all departments from db
  connection.query("SELECT * FROM department", (err,res) => {
    if (err) throw err;
    //go over res, and add each index to an array
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].name);
      // allDepartments.push(res[i].name);
    }
    console.log("-------------------");
  })
}

module.exports = viewDept;