const http = require('http');
const port = 9000;
const routes = require('./routes');

http.createServer(routes.requestHandler).listen(port)

console.log("Server running on port " + port)