// Create an array of objects and print the object with the highest value.

function HighestValue(arr) {
    let maxObj = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].value > maxObj.value) {
        maxObj = arr[i];
      }
    }
    return maxObj;
  }
  
const objects = [
{ Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
{ Fname: 'Ali', Lname : 'Raza', value: 15 },
{ Fname: 'Usman', Lname : 'Umer', value: 5 }
];
  
console.log(HighestValue(objects));