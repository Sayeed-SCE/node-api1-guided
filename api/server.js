// IMPORTS AT THE TOP
const Dogs = require('./dog-model');

// INSTANCE OF EXPRESS APP
const express = require('express');

const server = express();

// GLOBAL MIDDLEWARE
server.use(express.json());

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
    Dogs.findAll().then(dogs => res.status(200).json(dogs));
})

// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id/', (req, res) => {
    const { id } = req.params;
    Dogs.findById(id).then(dog => {
        if(dog == null) { // dog === null || dog === undefined
            res.status(404).json({ message: 'dog not found' });
        } else {
            res.json(dog);
        }
    });
});

// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req, res) => {
    let body = req.body;
    if(body.name == null) {
        res.status(400).json({ message: 'name is missing' });
        // return;
    }
    if(body.weight == null) {
        res.status(400).json({ message: 'weight is missing' });
        // return;
    }
    Dogs.create(body).then(dog => {
        res.status(201).json(dog);
    });
});

// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete('/api/dogs/:id', (req, res) => {
    const id = req.params.id;
    Dogs.delete(id).then(dog => {
        if(dog == null) {
            res.status(404).json({ message: 'dog not found' });
        } else {
            res.json(dog);
        }
    });
});

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
