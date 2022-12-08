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
    } else if (!isNaN(lines[row].split(" ")[0])) {
      dirSize += parseInt(lines[row].split(" ")[0]);
    }
    row++;
  }
  dirSizes.push(dirSize);
  return [dirSize, row];
};
findDirectorySizes(0);
const diskSpaceToFreeUp = 30000000 - (70000000 - dirSizes.pop());
console.log(Math.min(...dirSizes.filter((size) => size >= diskSpaceToFreeUp)));
