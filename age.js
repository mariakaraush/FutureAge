// let age = 90;
// let numberOfYears = 10;
// let in20Years = numberOfYears * 2;
// console.log(`In 10 years you will be ${age + numberOfYears}.`);
// console.log(`In 20 years you will be ${in20Years }.`);

// if (age < 67) {
// console.log(`You have ${ 67 - age } years left to retirement.`);
// } else {
// console.log(`You have retired ${age - 67} years ago. Enjoy your retirment.`);
// }

const readline = require('readline-sync')
let userAge = readline.question('Please enter your age: ')

// console.log(userAge)

// process.stdout.write('Hello'); // Console.log without the new line at the end

let currentYear = readline.question("What's the current year? ")
let futureYear = readline.question('For what year would you like to know your age? ')

console.log(`In ${futureYear} you will be ${(parseFloat(futureYear) - parseFloat(currentYear)) + parseFloat(userAge)} years old.`)
