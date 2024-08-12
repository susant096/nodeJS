const fs = require('fs')
const http = require('http')
const qs = require('querystring')
// const url = require('url')

function tampilkan(req, res, uri, pathname) {
    if (req.url === uri)
        fs.readFile('view/' + pathname, (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data)
            res.end()
        })
}

function dasboard(req, res) {
    if (req.url === "/admin/") {
        fs.readFile("view/admin/dasboard.html", (err, data) => {
            if (err)
                throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }
}

function login(req, res) {
    if (req.url === "/login/") {
        fs.readFile("view/login.html", (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                return res.end('404 not found')
            }
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }

    if (req.url === "/login/" && req.method === "POST") {
        let datas = '';
        req.on('data', function (data) {
            datas += data;
        })
        req.on('end', function () {
            let formData = qs.parse(datas);
            if (formData.username == "admin" && formData.password == "1234") {
                console.log('berhasil ');
                // res.writeHead(200, { 'Content-Type': 'text/html' })
                // res.write('<h2>Login berhasil</h2>')
                // res.end('ok');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<h2>Login Gagal</h2>')
                return res.write("<a href='/login/'>coba lagi</a>")
            }
        });
    }
}

http.createServer(function (req, res) {
    tampilkan(req, res, '/', 'index.html');

    tampilkan(req, res, '/about', 'about.html');

    login(req, res);


}).listen(8000)
console.log("server runing on http://localhost:8000")
