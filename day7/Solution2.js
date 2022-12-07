import Input from "./Input.js";
const dirSizes = [];
const lines = Input.split("\n");
const getDirectorySize = (row) => {
  let dirSize = 0;
  row++;
  while (row < lines.length && lines[row] !== "$ cd ..") {
    if (lines[row].startsWith("$ cd")) {
      const [innerSize, lastRow] = getDirectorySize(row);
      dirSize += innerSize;
      row = lastRow;
    } else if (row < lines.length && !isNaN(lines[row].split(" ")[0])) {
      dirSize += parseInt(lines[row].split(" ")[0]);
    }
    row++;
  }
  dirSizes.push(dirSize);
  return [dirSize, row];
};
getDirectorySize(0);
const diskSpaceToFreeUp = 30000000 - (70000000 - dirSizes.pop());
console.log(Math.min(...dirSizes.filter((size) => size >= diskSpaceToFreeUp)));
