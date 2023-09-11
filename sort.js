// Sort an array of numbers in ascending order.

function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b); // builin sort function
}
  
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = sortArrayAscending(unsortedNumbers);
console.log(sortedNumbers); 