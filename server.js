const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000

const drinks = require('./models/drinks.js');
const foods = require('./models/food.js')


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
            allFood:foods
        }
    );
});


app.get(`/drinks/:index`, (req, res) => {
    const index = req.params.index
    const theDrink = drinks[index]
    res.render("drinks_show.ejs", 
    {drink: theDrink, index: index}
    )})


app.get(`/drinks/:anything/:index`, (req, res) => {
    const index = req.params.index
    const theFood = foods[index]
    res.render("food_show.ejs", {
    food: theFood, index:index}
    )})

app.listen(PORT, (req, res) => {
    console.log(`listening to port ${PORT}`)
})

