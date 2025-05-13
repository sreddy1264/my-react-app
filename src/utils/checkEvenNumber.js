export function checkEvenNumber(numArr) {
    const filterEvenNumbers = numArr.filter((item) => item % 2 === 0);
    return filterEvenNumbers;
}