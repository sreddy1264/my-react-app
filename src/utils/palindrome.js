// method 1:
export function isPalindromeMethod(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

// method 2:

export function isPalindromeLoop(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
  return str === reversedStr;
}