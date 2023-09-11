// Create an array of strings and print the longest string.
function findLongestString(arr) {
    return arr.reduce((longest, str) => (str.length > longest.length) ? str : longest, '');
  }
  
const strings = ['abcdef', 'qwertyui', 'awserdftyghujk', 'Abu bakar', 'Ahmed'];
console.log(findLongestString(strings)); 