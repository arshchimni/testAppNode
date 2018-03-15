const hapi = require('hapi');
const server = new hapi.Server();
server.connection({
    port:4001,
    host:'0.0.0.0'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
        var data = {
            title: 'This is Index!',
            message: 'Hello, World. You crazy handlebars layout'
        };
        reply(data)
    }
});

server.start(function(err) {  
    if(err) console.log(err);
    // Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});