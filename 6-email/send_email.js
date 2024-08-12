var nodemailer = require('nodemailer')

var transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: ''
})