'use strict';

import Hapi from 'hapi';
import Inert from "inert";
import Path from "path";

const Server = new Hapi.Server();

const config = {
    server: {
        port: process.env.PORT || 3000
    }
};

Server.connection({
    host: '0.0.0.0',
    port: config.server.port,
    routes: {
        files: { relativeTo: Path.join(__dirname, '../dist') },
        cors: true
    }
});

Server.register(Inert, (err) => {
    if (err) throw err;
});

Server.route({
    method: 'GET',
    path:'/i/getUsers',
    handler: function (request, reply) {
        return reply('hello');
    }
});

Server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

Server.route({
    method: 'GET',
    path: '/services/getHeaders',
    handler: function(request, reply) {
        return reply(request.headers);
    }
});

//Server.route({
//    method: "GET",
//    path: "/{params*}",
//    handler: {
//        directory: {
//            path: '.',
//            redirectToSlash: true,
//            index: true
//        }
//    }
//});

Server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', Server.info.uri);
});
