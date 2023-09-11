// Write a function to reverse a string?

// Check if the string is empty or has only one character?
function reverseString(str){
    if(str.length <= 1) {
    return str;
    }

    // Create an empty string to store the reversed string.
    let reversedString = "";

    // Start from the last character of the string and add it to the reversed string.
    for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
    }

    // Return the reversed string.
    return reversedString;
}

console.log(reverseString("abubakar"));

