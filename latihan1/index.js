var http = require('http');
var url = require('url');
var fs = require(fs)

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/html' });

    // response.write('URL: ' + request.url);
    // switch (request.url) {
    //     case '/about':
    //         response.write("ini adalah halaman about");
    //         break;
    //     case '/produk':
    //         response.write("ini adalah halaman produk");
    //         break;
    //     case '/profil':
    //         response.write("ini adalah halaman profile");
    //         break;

    //     default:
    //         response.write("404 page not found");
    //         break;
    // }

    // var q = url.parse(request.url, true).query;
    // var text = 'kata kunci: ' + q.keyword;
    // response.write(text);

    response.write('Hello <b>world</b>')

    response.end();
}).listen(8000);

console.log("server runing on http://localhost:8000");