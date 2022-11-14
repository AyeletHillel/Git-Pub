function renderDrink(drinks){
    for(let i = 0; i < drinks.length; i++) {
        let name = drinks[i].name 
        name = name.charAt(0).toUpperCase() + name.slice(1)
        return `
        <h3>${name}</h3>
        `
    }
}

module.exports = {
    renderDrink
}