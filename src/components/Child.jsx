import React from 'react';
import Practice from './Pactice';
import { filterData, myArray } from '../testData/testData';

function Child(props) {
    const {
         name,
         stringData,
         handleOnClick,
         joinData,
         concatData,
        } = props;

        const myFilterFunction = filterData.filter((item) => item < 600);
       
        console.log('myFilterFunction', myFilterFunction);

        const myMapFunction = myArray.map((item) => <p>{item.color}</p>);

        const reverseAString = (str) => {
         let newString = "";
         for(let i = str.length - 1; i >= 0; i--) {
             newString += str[i]
         }
         return newString;
        }

        console.log('reverseAString', reverseAString('hello'));

        const revereAStringWithMethods = (str) => {
         const convertStringToAnArray = str.split('');
         const reverseAnArray = convertStringToAnArray.reverse();
         return reverseAnArray.join('');
        };

        console.log('revereAStringWithMethods', revereAStringWithMethods('hello'));

        const arrayOfNumbers = [1, 2, 3, 4];
        const doubleElementsOfAnArray = arrayOfNumbers.reduce(((accumulator, 
            currentValue, index, array) => array[index] = array[index] * 2), 0);
        console.log('doubleElementsOfAnArray', doubleElementsOfAnArray);

    return(
        <>
        <p>{name}</p>
        <p>toString - {stringData}</p>
        <p>join - {joinData}</p>
        <p>concat - {concatData}</p>
        {/* <p>filter - {myFilterFunction}</p> */}
        <p>{myMapFunction}</p>
        <Practice />
        <button onClick={handleOnClick}>Click</button>
        </>
    )
}

export default Child;