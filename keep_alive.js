var http = require('http');

http.createServer(function (req, res) {
  res.write("rate us star in github if helps 💖 ");
  res.end();
}).listen(8080);
//if got port error change it to any random 4 digits