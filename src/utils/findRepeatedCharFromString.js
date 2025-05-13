// Find a repetitive characters from a string and input it.
// Input: aaaarggtrq
// Output: 4a2r2gtq

export function findRepetitiveCharFromString(str) {
  const repeteativeChar = str.split("").reduce((accumulator, char) => {
    if (!accumulator[char]) {
      accumulator[char] = 1;
    } else {
      accumulator[char] += 1;
    }
    return accumulator;
  }, {});
    const totalChar = Object.entries(repeteativeChar);
    const reverseArray = totalChar.map((item) => item.reverse()).flat().toString().replaceAll(",", "").replaceAll("1", "");
  return reverseArray;
} 