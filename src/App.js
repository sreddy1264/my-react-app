import './App.css';
// import Home from './components/Home';
import { DropDownList } from './components/DropdownList/DropdownList';
import { findRepetitiveCharFromString } from "./utils/findRepeatedCharFromString";

function App() {
  //  If we list all the natural numbers below 10 that are multiples of 3
  //  or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  //  Finish the solution so that it returns the sum of all the multiples of 3
  //  or 5 below the number passed in.

  // Note: If the number is a multiple of both 3 and 5, only count it once.
  // Also, if a number is negative, return 0.
  // const solution = (num) => {
  //   // Your solution
  //  let sum = 0;
  //  for (let i = 3; i < num; i++) {
  //      if (num % 3 === 0 || num % 5 === 0) {
  //        sum += i;
  //      }
  //  }
  //  return sum;
  // };

  // console.log(solution(0)); // 0
  // console.log(solution(-15)); // 0
  // console.log(solution(10)); // 23
  // console.log(solution(20)); // 78
  // console.log(solution(200)); // 9168

  function findMaxChar(str) {
    const maxChar = str.split("").reduce((accumulator, char) => {
      // console.log("accumulator", accumulator);
      if (!accumulator[char]) {
        accumulator[char] = 1;
      } else {
        accumulator[char]++;
      }
      return accumulator;
    }, {});
    let max = 0;
    let maxWord = "";
    for (let char in maxChar) {
      if (maxChar[char] > max) {
        max = maxChar[char];
        maxWord = char;
      }
    }
    return maxWord;
  }
  // console.log("findMaxChar", findMaxChar("abcccccccd"));

  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      // console.log('value', i, i % 5 === 0);
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  }

  function maxChar(str) {
    const char = str.split("").reduce((accumulator, item) => {
      if (accumulator[item]) {
        accumulator[item]++;
      } else {
        accumulator[item] = 1;
      }
      return accumulator;
    }, {});
    let max = 0;
    let maxCharacter = "";
    for (let key in char) {
      if (char[key] > max) {
        max = char[key];
        maxCharacter = key;
      }
    }

    return maxCharacter;
  }

  // console.log('max', maxChar("abcccccccd"));

  // console.log("fizzBuzz(5)", fizzBuzz(15));
  // sum of two numbers
  function sumNumbers(a, b) {
    return a + b;
  }
  // console.log("SumNumbers", sumNumbers(1, 2));

  // find the maximum number in an array
  function getMaxNumber(maxArray) {
    return Math.max(...maxArray);
  }
  // console.log("getMaxNumber", getMaxNumber([1, 2, 8, 10]));
  // palindrome
  function palindrome(str) {
    return str === str.split("").reverse().join("");
  }
  // console.log("palindrome", palindrome("madam"));
  // reverse a given string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  // console.log("reverseString", reverseString("test"));
  // takes an array of numbers and returns a new array with only the even numbers.
  function findEvenNumber(nums) {
    return nums.filter((num) => num % 2 === 0);
  }
  // console.log("findEvenNumber", findEvenNumber([2,2,3,4]));
  // calculate the factorial of a given number
  function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }

  // console.log("calculateFactorial", calculateFactorial(9));
   console.log(
     "findRepetitiveCharFromString",
     findRepetitiveCharFromString("aaaarggtrq")
   );
  return <DropDownList />;
}

export default App;
