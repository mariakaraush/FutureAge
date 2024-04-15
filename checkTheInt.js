const readline = require('readline-sync')
let intNum = readline.question('Please enter a number: ')

while (intNum != 'number') {
    intNum = readline.question('Please enter a number: ')
}

if (Math.sign(intNum) == 1) {
    console.log('Your number is positive.')
} else if (Math.sign(intNum) == -1) {
    console.log('Your number is negative')
} else if (Math.sign(intNum) == 0) {
    console.log('Your number is a zero.')
}