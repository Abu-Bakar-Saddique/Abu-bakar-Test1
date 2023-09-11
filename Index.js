// Find the index of an element in an array.

function findIndex(arr, element) {
    return arr.indexOf(element);  // indexof in a build in function for index finding
  }
  
const fruits = ['ali', 'umer', 'abubakar', 'usman'];
const index = findIndex(fruits, 'abubakar');
console.log(index); 