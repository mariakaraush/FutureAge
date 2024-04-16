const readline = require('readline-sync')
let dogAge = Math.floor(readline.question("Please enter the dog's age: "))

if (dogAge > 2) {
let earlyDogYears = 2
let lateDogYears = dogAge - earlyDogYears

earlyDogYears = earlyDogYears * 10.5

console.log(`The dog's age in human years is ${dogAge} years old. The dog's age in dog's years is ${lateDogYears * 4 + earlyDogYears} years old`)
} else if (dogAge <= 2) {
    earlyDogYears = dogAge * 10.5
    console.log(`The dog's age in human years is ${dogAge} years old. The dog's age in dog's years is ${earlyDogYears} years old`)
}


