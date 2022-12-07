import Input from "./Input.js";
const dirSizes = [];
const lines = Input.split("\n");
const findDirectorySizes = (row) => {
  let dirSize = 0;
  row++;
  while (row < lines.length && lines[row] !== "$ cd ..") {
    if (lines[row].startsWith("$ cd")) {
      const [innerSize, lastRow] = findDirectorySizes(row);
      dirSize += innerSize;
      row = lastRow;
    } else if (row < lines.length && !isNaN(lines[row].split(" ")[0])) {
      dirSize += parseInt(lines[row].split(" ")[0]);
    }
    row++;
  }
  if (dirSize < 100000) {
    dirSizes.push(dirSize);
  }
  return [dirSize, row];
};
findDirectorySizes(0);
console.log(dirSizes.reduce((a, b) => a + b, 0));
