const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.listen(PORT, (req, res) => {
    console.log(`listening to port ${PORT}`)
})

