//.2  URL MODULE(Split a web address into readable parts)
var url = require("url");
var adr = "https://www.w3schools.com/nodejs/nodejs_url.asp"
var q = url.parse(adr);

console.log(q.host)
console.log(q.pathname)
