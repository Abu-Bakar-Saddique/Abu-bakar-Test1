// Array destructuring and object destructuring are features in JavaScript that allow you to easily extract values 
// from arrays and objects respectively and assign them to variables.

// // Array destructuring
const numbers = [20, 30, 40];

// Extract values and assign them to variables
const [a, b, c] = numbers;

console.log("Array destructuring");
console.log(a); 
console.log(b); 
console.log(c); 

// skip value
// to skip use , , in its place
const [first, , third] = numbers;

console.log("Array destructuring for skipping value");
console.log(first); 
console.log(third); 


// // Array destructuring with rest operator
const [first1, ...rest] = numbers;

console.log("Array destructuring with rest operator");
console.log(first1); 
console.log(rest); 


// // Object destructuring
const person = { firstName: 'John', lastName: 'Doe' };

// Extract values and assign 
const { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);


// // Object destructuring with rest operator
const { firstName1, ...rest1 } = person;


console.log("Object dest. for rest")
console.log(firstName1)
console.log(rest1)
