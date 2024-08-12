var fs = require('fs');

fs.rename('mynewfile2.txt', 'refiletext2.txt', function (err) {
    if (err) throw err;
    console.log('file renamed');
})