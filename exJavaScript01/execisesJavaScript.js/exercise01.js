const ask = require('readline-sync')

let fullName = ask.question("Insert full name: ")
let age = ask.question("Insert age: ")
let city = ask.question("Insert city: ")
let enrolled = true???????????
let height = ask.question("Insert height: ")
let classes = "RS-TI 261M"??????????

console.log(`
Full Name: ${fullName}
Age: ${age}
City: ${city}
Registered: ${enrolled}
Height: ${height}
Class: ${classes}
`)