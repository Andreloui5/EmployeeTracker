const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connection = require("../db/connection");

function deleteEmployee() {
  let choices = []
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    //go over res and print to console
    for (let i = 0; i < res.length; i++) {
      let data = `${res[i].first_name} ${res[i].last_name}`
      choices.push(data);
      // console.log(choices);
    }
    ask();
  });

  function ask() {
    inquirer.prompt([
      {
        type: "list",
        name: "chosenEmployee",
        message: "Which employee would you like to delete?",
        choices: choices
      }
    ]).then((answer) => {
      let ans = answer;
      connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        //go over res and print to console
        for (let i = 0; i < choices.length; i++) {
          if (`${res[i].first_name} ${res[i].last_name}` === ans.name) {
            connection.query("DELETE * FROM employee WHERE first_name =?, last_name =?", [res[i].first_name, res[i].last_name]);
          }
        }
      });
  
    })
  };
}

module.exports = deleteEmployee;