const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000

const drinks = require('./models/drinks.js');
const food = require('./models/food.js')


app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

// app.get("/drinks", (req, res) => {
//     res.send(drinks)
// })

// INDEX ROUTE - GET to /fruits - Returns all fruits
app.get('/drinks/', (req, res) => {
    // res.render(template, data)
    res.render(
        'drinks_index.ejs',
        {
            allDrinks:drinks,
            allFood:food
        }
    );
});

app.get(`/drinks/:id/:price`, (req, res) => {
    res.render("drinks_show.ejs", {
        name: req.params.id,
        price: req.params.price
    })
})

app.listen(PORT, (req, res) => {
    console.log(`listening to port ${PORT}`)
})

