const http = require('http'); //crea servidor.

const app = require('./src/app'); // gestión rutas.

require('dotenv').config();

//Configuro Base de datos 
require('./src/config/db');

const server = http.createServer(app);//cada petición y respuestas se encarga app(aplicación de express)

const PORT = process.env.PORT || 3000;
server.listen(PORT);// levanta el servidor.

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
});
server.on('error', (error) => console.log(error));