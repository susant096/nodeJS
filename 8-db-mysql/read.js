
const db = require('./db_config')

const sql = "SELECT * FROM customers";

db.query(sql, function (err, res) {
    if (err) throw err;
    console.log(`ID \t NAME \t\t ADDRESS`)
    console.log(`-------------------------------------------------------------`)
    res.forEach((customer) => {
        console.log(`${customer.id} \t ${customer.name} \t ${customer.address}`)
    })
})