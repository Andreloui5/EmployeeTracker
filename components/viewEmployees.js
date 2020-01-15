const connection = require("../db/connection")
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

function viewEmployees() {

  //selects employee info and joins employee role and dept
  connection.query("SELECT * FROM employee", (err,res) => {
    if (err) throw err;
    //go over res and print to console
    for (let i = 0; i < res.length; i++) {
      let data = `${res[i].first_name} ${res[i].last_name}`
      console.log(data);
      // allDepartments.push(res[i].name);
    }
    console.log("-------------------");
  })
};

module.exports = viewEmployees;