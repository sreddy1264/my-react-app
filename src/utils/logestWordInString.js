export function findLongestWordInString(str) {
    let strArray = str.split(' ');
    let largestWord = "";
    for (let item of strArray) {
        if (item.length > largestWord.length) {
            largestWord = item;
        }
    }
    return largestWord;
}