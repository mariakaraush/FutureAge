const readline = require('readline-sync')
let userInput= readline.question('Please enter a number: ')
let convertUser = parseInt(userInput)

// isNan()

while (isNaN(convertUser)) {
    userInput = readline.question('Please enter a number: ')
    let convertUser = parseInt(userInput)
}

if (Math.sign(userInput) == 1) {
    console.log('Your number is positive.');
} else if (Math.sign(userInput) == -1) {
    console.log('Your number is negative');
} else if (Math.sign(userInput) == 0) {
    console.log('Your number is a zero.');
}


// typeof(var) == "number"