export function convertToTitleCase(str) {
    const titleCase = str
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1, str.length - 1));

    return titleCase;
}