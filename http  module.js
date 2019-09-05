
//.1 HHTP MODULE
var http = require("http");
 http.createServer(function(req,res){
 	res.write('<b>securifi<b> <br>');
 	res.write("secrifi embedded systems")
 	res.write(req.url)              
 	res.end()
 }).listen(4000);
console.log("Running port no:4000")



