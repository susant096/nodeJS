const db = require('./db_config')

const sql = `UPDATE customers 
SET address = 'LEM Lantai 1' 
WHERE id=1
`;

db.query(sql, function (err, res) {
    if (err) throw err;
    console.log("number of record inserted: " + res.affectedRows);

})