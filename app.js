require('dotenv').config();

const Server = require('./models/server');
//importamos el modelo server
const server = new Server();

server.listen();