const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connection = require("../db/connection");

function addDept() {
  inquirer.prompt([
    {
      type:"input",
      name:"deptName",
      message:"What department would you like to add?"
    }
  ]).then( (res) =>{
    let query = ("INSERT INTO department VALUES ?", );
    // console.log(query)
    connection.query(query, (err) => {
      if (err) throw err;
      console.log(`Success! The department ${res.deptName} has been created.`);
      console.log("-------------------");
    });
  })
};


module.exports = addDept;