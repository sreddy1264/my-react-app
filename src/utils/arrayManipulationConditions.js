// includes()

// This method checks if an array contains a certain item. It is similar to .some(),
//  but instead of looking for a specific condition to pass, it checks if the array contains a specific item.

// let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
// users.includes('baddy'); // returns true

// If the item is not found, it returns false



// some()
// This method checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.

// checks if at least one number is positive
// const numbers = [1, -1, 2, 3];
// let atLeastOnePositive = numbers.some((value) => {
// return value >= 0;
// })
// console.log(atLeastOnePositive); // would return true


// every()
// This method checks if all items in an array pass the specified condition and return true if passed, else false.

// check if all numbers are positive
// const numbers = [1, -1, 2, 3];
// let allPositive = numbers.every((value) => {
// return value >= 0;
// })
// console.log(allPositive); // would return false