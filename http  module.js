var http = require("http");
http.createServer(function(err,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.end("hello world");
}).listen(4000);
console.log("port no is: 4000");



