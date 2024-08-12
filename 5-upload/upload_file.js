var http = require('http')
var fs = require('fs')
var formidable = require('formidable')
var mv = require('mv')


http.createServer(function (req, res) {

    if (req.url === "/" && req.method === "GET") {
        fs.readFile("form_upload.html", (err, data) => {
            res.writeHead(200, { 'content-type': 'text/html' })
            if (err) throw err;
            res.end(data)
        })
    }

    if (req.url === "/" && req.method === "POST") {
        var form = new formidable.IncomingForm()

        form.parse(req, (err, fields, files) => {
            var oldPath = files.fileToUpload.filepath;
            var newPath = __dirname + "/uploads/" + files.fileToUpload.originalFilename;

            mv(oldPath, newPath, function (err) {
                if (err) { throw err; }
                console.log('file upload successfully');
                return res.end('file uploded successfully');

            })
        })
    }
}).listen(8000);
console.log("server listening on http://localhost:8000")