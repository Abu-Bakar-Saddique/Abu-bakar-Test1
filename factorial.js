//Write a function to find the factorial of a number?

function factorial(n) {
    if (n === 0) {
      return 1;
    } 
    else  if(n < 0){
        return "negative";
    }
    else {
      return n * factorial(n - 1);
    }
  }

Num = -5
console.log("Fctorial: ",factorial(Num))

