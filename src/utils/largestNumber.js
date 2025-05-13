// method 1
export function getLargestNumber(arr) {
    return Math.max(...arr)
}

//method 2
export function getLagestNumberLoop(arr) {
    let largestNumber = 0;
    for (let item of arr) {
        if (largestNumber < item) {
            largestNumber = item;
      }
    }
    return largestNumber;
}

// method 3
export function getLargestNumberLoop2(arr) {
    let largestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
          largestNumber = arr[i];
        }
    }
    return largestNumber;
}

