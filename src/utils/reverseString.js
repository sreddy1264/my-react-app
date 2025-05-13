// method 1
export function reverseStringMethod(str) {
    return str.split("").reverse().join("");
}

// method 2
export function reverseStringLoop(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }
    
    return reversedString;
}