const express = require('express');

const server = express();

server.listen(9000, () => {
    console.log('the server is now running.');
});