//method 1

export function removeDuplicatesMethod(arr) {
    const removedDuplicates = [...new Set(arr)];
    return removedDuplicates;
}

//method 2

export function removeDuplicatesLoop(arr) {
    let uniqueItemsArray = [];
    for (let item of arr) {
        if (!uniqueItemsArray.includes(item)) {
            uniqueItemsArray.push(item)
        }
    }
    return uniqueItemsArray;
}

//method 3

export function removeDuplicatesLoop2(arr) {
    let uniqueItemsArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueItemsArray.indexOf(arr[i]) === -1) {
            uniqueItemsArray.push(arr[i]); 
        }
    }
    return uniqueItemsArray;
}