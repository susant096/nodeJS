var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

    if (q.pathname == "/search/" && req.method == "GET") {
        var keyword = q.query.keyword;

        // ambil data dari form dengan metode get
        if (keyword) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h3>Search Result</h3>");
            res.write("<p>anda mencari: <b>" + keyword + "</b></p>");
            res.write("<pre>tidak ada hasil! maaf website ini masih dalam pengembangan<pre>");
            res.end("<a href='/search/'>kembali</a>");
        } else {
            fs.readFile('search.html', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 not found");
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            })
        }
    }

}).listen(8000)
console.log('server is runing on http://localhost:8000')