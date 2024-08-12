var http = require('http')
const qs = require('querystring')
var fs = require('fs')


http.createServer(function (req, res) {
    if (req.url == "/login/" && req.method == "GET") {

        fs.readFile("login_form.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                return res.end('404 not found')

            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            return res.end()
        })
    }

    if (req.url === "/login/" && req.method === "POST") {
        var reqBody = '';
        req.on('data', function (data) {
            reqBody += data;

            if (reqBody.length > 1e7) {
                res.writeHead(413, 'requwst entity too large', { 'Content-Type': 'text/html' });
                res.end('<!doctype html><html><head><title>413</title></head><body>413: request entity too large</body></html>')

            }
        });

        req.on('end', function () {
            var formData = qs.parse(reqBody);

            if (formData.username == "petani" && formData.password == '1234') {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write('<h2>selamat datang pakde</h2>')
                res.write('<p>username: ' + formData.username + '</p>')
                res.write('<p>password: ' + formData.password + '</p>')
                res.write("<a href='/login/'>kembali</a>")
                res.end()
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<h2>Login Gagal</h2>')
                res.write("<a href='/login/'>coba lagi</a>")
            }
        })
    }
}).listen(8000)

console.log('server is runing on http://localhost:8000/login/')