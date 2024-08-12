var fs = require('fs');

fs.unlink('refiletext2.txt', function (err) {
    if (err) throw err;
    console.log('file deleted');
})