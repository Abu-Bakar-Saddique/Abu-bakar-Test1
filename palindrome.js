// Write a function to check if a string is a palindrome

function isPalindrome(str) {
    // Convert the string to lowercase and remove all non-alphanumeric characters
    const cleanedString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  
    if (cleanedString.length <= 1) {
      return true;
    }
  
    for (let i = 0, j = cleanedString.length - 1; i < j; i++, j--) {
      if (cleanedString[i] !== cleanedString[j]) {
        return false;
      }
    }
  
    return true;
}

str = 'abubakar'
console.log(isPalindrome(str))
str1 = "maham"
console.log(isPalindrome(str1))