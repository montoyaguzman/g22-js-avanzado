const http = require('http');

const server = http.createServer((request, response) => {
    const status = '200'; //status Http list
    const mymeType = { 'Content-type': 'text/html' } // myme types list
    response.writeHead(status, mymeType);
    response.write('<html> <body> hola desde el servidor node </body> </html>');
    response.end();
});

server.listen(8080);

console.log('Servidor corriendo en 8080...');