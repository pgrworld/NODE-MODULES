//.1 http module
var http = require("http");
 http.createServer(function(req,res){
 	res.writeHead(200, {'Content-Type':'text/html'})
 	res.write('<b>securifi<b> <br>');
 	res.write("secrifi embedded systems")
 	res.write(req.url)              
 	res.end()
 }).listen(4000);
console.log("Running port no:4000")


