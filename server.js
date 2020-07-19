//http package import provide some functionality to support server spinning
const http = require('http');

const app = require('./app');

//Read the port value from environment otherwise 3000
const port = process.env.PORT || 3000;
// Creating the simple server
const server = http.createServer(app);
//Listening to the port
server.listen(port);