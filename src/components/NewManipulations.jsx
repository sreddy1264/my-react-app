// To add two numbers
function addNumbers (a,b) {
    return a + b;
};
// To find even number
function isEvenNumber (num) {
    return num % 2 === 0;
};
// To find even numbers from an array
function isEvenNumber (numList) {
    return numList.filter(num => num % 2 === 0);
};
// To reverse a string
function reverseString (str) {
  return str.split("").reverse().join("");
};
// To find if a string is palindrome
function isPolindrome (str) {
  const regEx = /[A-Za-z0-9]/g;
  const lowerCaseConversion = str.toLowerCase().replace(regEx, "");
  const reverseString = str.split("").reverse().join("");

  return lowerCaseConversion === reverseString;
};

function MaxNumber (numList) {
    return Math.max(...numList);
};
// Factorial of a given number
function factorial (num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};
// Check if a given number is a prime number
function isPrimaryNumber (num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
};
// return Fibonacci sequence up to a given number of term
function fibonacciSequence(numTerm) {
    if (numTerm <= 0) return [];
    if (numTerm === 1) return [0];
    let sequence = [0,1];
    while(sequence.length < numTerm) {
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
    return sequence;
};

