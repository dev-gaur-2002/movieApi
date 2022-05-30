const express = require('express')
const connectDb = require('./db/connect')
const dotenv = require('dotenv').config()
const router = require('./routes/route')

const server = express()

server.use(express.json())
server.use('/api/v1',router)

const start = ()=>{
    connectDb()
    server.listen(process.env.PORT , ()=>{
        console.log(`server is up on port ${process.env.PORT}`)
    })
}

start()
