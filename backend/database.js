const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "animals",
  password: "achref2050",
});

 con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to my sql !!!");
  }
});


module.exports = con;
