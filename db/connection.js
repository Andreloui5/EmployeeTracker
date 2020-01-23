const mysql = require('mysql');

const connection = mysql.createConnection({

  host:"localhost",
  route:3060,
  user:"root",
  password:"rootroot",
  database:"employeesDB"

});

// connection.connect( (err) => {
//   if (err) throw err;
// });

// connection.query = util.promisify(connection.query);

module.exports = connection;