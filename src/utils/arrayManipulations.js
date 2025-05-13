// The JavaScript method toString() converts an array to a string separated by a comma.

// let colors = ['green', 'yellow', 'blue'];

// console.log(colors.toString()); // green,yellow,blue

export function toStringManipulation(array) {
    const stringArray = array.toString();
    return stringArray;
};

// The JavaScript join() method combines all array elements into a string.

// It is similar to toString() method, but here you can specify the separator instead of the default comma.

// let colors = ['green', 'yellow', 'blue'];

// console.log(colors.join('-')); // green-yellow-blue

export function joinManipulation(array) {
    const joinArray = array.join(' ');
    return joinArray;
}

// concat
// This method combines two arrays together or add more items to an array and then return a new array.

// let firstNumbers = [1, 2, 3];
// let secondNumbers = [4, 5, 6];
// let merged = firstNumbers.concat(secondNumbers);
// console.log(merged); // [1, 2, 3, 4, 5, 6]

export function concatManipulation(array1, array2) {
    const concatArray = array1.concat(array2);
    return concatArray;
}

// push()
// This method adds items to the end of an array and changes the original array.

// let browsers = ['chrome', 'firefox', 'edge'];
// browsers.push('safari', 'opera mini');
// console.log(browsers); 
// ["chrome", "firefox", "edge", "safari", "opera mini"]

export function pushManipulation(array, values) {
  const pushArray = array.push(values);
  return pushArray;
}

// pop()
// This method removes the last item of an array and returns it.

// let browsers = ['chrome', 'firefox', 'edge'];
// browsers.pop(); // "edge"
// console.log(browsers); // ["chrome", "firefox"]

// shift()
// This method removes the first item of an array and returns it.

// let browsers = ['chrome', 'firefox', 'edge'];
// browsers.shift(); // "chrome"
// console.log(browsers); // ["firefox", "edge"]

// unshift()
// This method adds an item(s) to the beginning of an array and changes the original array.

// let browsers = ['chrome', 'firefox', 'edge'];
// browsers.unshift('safari');
// console.log(browsers); //  ["safari", "chrome", "firefox", "edge"]
// You can also add multiple items at once

// forEach()
// This method is good for iterating through an array.

// It applies a function on all items in an array

// const colors = ['green', 'yellow', 'blue'];
// colors.forEach((item, index) => console.log(index, item));
// // returns the index and the every item in the array
// // 0 "green"
// // 1 "yellow"
// // 2 "blue"
// iteration can be done without passing the index argument

// const colors = ['green', 'yellow', 'blue'];
// colors.forEach((item) => console.log(item));
// returns every item in the array
// "green"
// "yellow"
// "blue"

