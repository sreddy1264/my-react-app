export function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.split("");
    let count = 0;
    for (let char of strArr.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}