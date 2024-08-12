var fs = require('fs');

fs.open('mynewfile2.txt', 'w+', function (err, file) {
    if (err) throw err;

    let content = "hallo petanikode pakde";

    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('saved!');
    });
    // console.log(file);


    fs.readFile('mynewfile2.txt', (err, result) => {
        if (err) throw err;
        console.log(result.toString('utf8'));
    });

});
