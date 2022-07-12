// import the server and start it!
const express = require ('express')

const server = express ()

server.get('/hello', (req, res) =>{
    res.json({message: 'hello', })
})

server.listen(5000, () => {
    console.log('server is listening on 5000')

})