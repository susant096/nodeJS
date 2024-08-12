var mysql = require('mysql');

var db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "paktani"


})

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");
})

module.exports = db;