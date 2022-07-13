const express = require("express");
const Dog = require("./dog-model");
// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
// IMPORTS AT THE TOP

// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
const server = express();

// GLOBAL MIDDLEWARE
server.use(express.json());

// ENDPOINTS
// ENDPOINTS
// ENDPOINTS
// ENDPOINTS
server.get("/hello", (req, res) => {
  res.json({ message: "hello" });
});

// [GET]    /             (Hello World endpoint)
server.get("/api/dogs", (req, res) => {
  //pull dogs from DB
  Dog.findAll()
    .then((dogs) => {
      //send dogs back to client
      res.json(dogs);
    })
    .catch((err) => {
      res.status(500).json({
        message: "something bad happened",
        error: err.message,
      });
    });
});

server.get("/api/dogs", async (req, res) => {
  try {
    const dogs = await Dog.findAll();
    res.json(dogs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something bad happened", error: err.message });
  }
});
// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;
