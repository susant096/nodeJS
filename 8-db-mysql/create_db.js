var db = require('./db_config')

const sql = "CREATE DATABASE paktani";
db.query(sql, function (err, res) {
    if (err) throw err;
    console.log("database created");
})
