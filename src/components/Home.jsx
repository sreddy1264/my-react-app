import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
    // Write a function in JavaScript that takes an array of numbers 
    // and returns the sum of all positive numbers in the array.
//    const myArray = [9,6,-4];

    // console.log('getPositiveSum', getPositiveSum(myArray));

    // const sumPositiveValues = (arr) => arr.filter(num => num > 0).reduce((preval, currentVal) => preval + currentVal,0);

    // console.log('sumPositiveValues', sumPositiveValues(myArray));


    // Write a function in JavaScript that takes a string as input and 
    // returns a new string with all the vowels removed.

    const removeVowelsFromString = (str) => {
        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
          if (!vowels.includes(str[i])) {
            newStr += str[i];
          }
        }
        return newStr;
    }

    console.log('removeVowelsFromString', removeVowelsFromString("is this working"));

    // Write a function in JavaScript that takes an array of strings as input 
    // and returns a new array with the strings sorted in alphabetical order.

    const sortArrayOfStrings = (strArr) => strArr.sort();
    console.log('sortArrayOfStrings', sortArrayOfStrings(['text', 'ray', 'eat', 'apple', 'sky']));

    // Write a function in JavaScript that checks if a string is a palindrome.
    const checkPalindrome = (str) => {
       const reverseAStr = str.split("").reverse().join("");
       return str === reverseAStr;
    }

    console.log('checkPalindrome', checkPalindrome('tat'));

    // Write a function in JavaScript that finds the second highest number in an array of numbers.

    const findSecondHighestNum = (arr) => {
      const sorted = arr.sort((a,b) => b - a);
      return sorted[1];
    }

    // Write a function in JavaScript that removes duplicates from an array.

    const removeDuplicates = (arr) => [...new Set(arr)];

    console.log('removeDuplicates', removeDuplicates([2,2,3,1,1,5]));
    

    return(
        <div>
        This is Home
        {/* <Link to="/about">About</Link> */}
        </div>
    );
};

export default Home;