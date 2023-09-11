// Write a function to check if a number is even or odd.

const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

rl.question("Enter a number: ", (input) => {
  const number = parseInt(input);

  if (!isNaN(number)) {
    const result = isEvenOrOdd(number);
    console.log(`The number ${number} is ${result}.`);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  rl.close();
});
