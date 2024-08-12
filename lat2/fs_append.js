var fs = require('fs');

fs.appendFile('mynewfiles.txt', 'hallo petani kopde!', function (err) {
    if (err) throw err;
    console.log('saved!');
});