import React from 'react';

const InterviewArrayManipulations = () => {
//reverse a string
// method 1: 
const rerseAString = (str) => str.split('').reverse().join('');
// method 2:
const reverseAStringUsingForLoop = (str) => {
    let reversedStr = '';
 for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
 }
 return reversedStr;
};
console.log('reverseAString', rerseAString('hello'));
console.log('reverseAStringUsingForLoop', reverseAStringUsingForLoop('test'));
// return Even or Odd based on number we pass
const evenOrOdd = (num) => num % 2 === 0 ? 'Even' : 'Odd';
console.log('evenOrOdd', evenOrOdd(20));
console.log('evenOrOdd', evenOrOdd(13));
// check if string consists of vowel letters 'a,e,i,o,u' and count them
const checkForVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    const convertStrToArray = str.split('');
    const givenArray = str.split('');
    return givenArray.filter(letter => vowels.includes(letter)).length;
}
console.log('checkForVowels', checkForVowels('hello'));
// create a function that checks if a number `n` is divisible by two numbers x and y.
// all inputs are positive, non-zero digits.
function isDivisible(n,x,y) {
    const divisibleByx = n/x;
    const divisibleByy = n/y;
    if(divisibleByx % 1 === 0 && divisibleByy % 1 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log('isDivisible', isDivisible(2.5,2,5));
//make a given number to negative if given number is not negative
const makeNumberNegative = (num) => num < 0 ? num : -num;

console.log('makeNumberNegative', makeNumberNegative(2));
console.log('makeNumberNegative', makeNumberNegative(-2));
//find smallest integer of an array of integers
const findSmallestInteger = (arr) => Math.min(...arr);
console.log('findSmallestInteger', findSmallestInteger([2,4,5,-9]));
//reduce - two argumants. callback function and initial value. 
// callback function takes three arguments - prevValue, currentValue, 
const findLongestString = (arr) => arr.reduce((prevString, currentString) => currentString.length > 
prevString.length ? currentString : prevString,'');
//output: watermelon
console.log('findLongestString', findLongestString(['apple', 'watermelon', 'orange', 'findLongestString']))
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
let count = 0;
chars.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    } else {
        count++
    }
});

console.log('uniqueChars', uniqueChars);
console.log('count', count);
 return (<div>InterviewArrayManipulations</div>);
};

export default InterviewArrayManipulations;