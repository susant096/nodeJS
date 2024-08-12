var url = require('url')
var add = 'https://www.petanikode.com/search.php?year=2018&month=february';
var q = url.parse(add, true);

console.log("protocol: " + q.protocol);
console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("params: " + q.search);

var data = q.query;
console.log(data);