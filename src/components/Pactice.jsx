import React, { useState } from 'react';
import InterviewArrayManipulations from './InterviewArrayManipulations';

const Practice = () => {
console.log('Practice component rendered');
const [value, setValue] = useState("");
console.log('value', value);
const reverseGivenString = (str) => {
 let reversedString = "";
 for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
 }
 return reversedString;
};
let myArray = ['hello', 'array', 'manipulations'];
const arrayToStringConversion = myArray.toString();
const arrayToStringConversionUsingJoin = myArray.join(' ');
const joiningTwoArrays = (arr1, arr2) => arr1.concat(arr2);
const pushingItemsIntoArray = (arr, newItem) => {
    arr.push(newItem);
    return arr;
};
// const removingItemFromArray = () => {

// }
console.log('reversedString', reverseGivenString('hello'));
console.log('arrayToStringConversion', arrayToStringConversion);
console.log('arrayToStringConversionUsingJoin', arrayToStringConversionUsingJoin);
console.log('joiningTwoArrays', joiningTwoArrays([1,2,3], [4,5,6]));
console.log('pushingItemsIntoArray', pushingItemsIntoArray([2,4,5],8));
return(
    <div>
        <input onChange={(e) => setValue(e.target.value)} />
        <InterviewArrayManipulations />
    </div>    
)
};

export default Practice;