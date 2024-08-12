const db = require('./db_config')

const sql = `DELETE FROM customers WHERE id=1`;

db.query(sql, function (err, res) {
    if (err) throw err;
    console.log("number of record deleted: " + res.affectedRows);
})