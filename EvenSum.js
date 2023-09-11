// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

// function
function sumOfEven(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0);
  }
  
const numbers = [34, 21, 91, 51, 4, 18];
console.log(sumOfEven(numbers));