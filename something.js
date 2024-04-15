const readline = require('readline-sync')
let computerFavNumber = 7
let userName = readline.question('Please enter your name: ')
let userFavNumber = readline.question('Please enter your favourite number: ')

console.log(`Hello ${userName}!`)

if (userFavNumber == computerFavNumber) {
    console.log(`That’s my favourite number as well!`)
}