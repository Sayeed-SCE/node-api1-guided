// IMPORTS AT THE TOP
const Dogs = require('./dog-model');

// INSTANCE OF EXPRESS APP
const express = require('express');

const server = express();

// GLOBAL MIDDLEWARE

// ENDPOINTS

// [GET]    /             (Hello World endpoint)
server.get('/', (req, res) => {
    console.log('here is my log');
    // res.send('{"key": "value"}');
    res.json({ key: "value" });
})

server.get('/hello', (req, res) => {
    res.json({ hello: "there" });
});

server.get('/server/hangs', (req, res) => {
    res.status(404).send();
});

// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req, res) => {
    Dogs.findAll().then(dogs => res.json(dogs));
})

// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
