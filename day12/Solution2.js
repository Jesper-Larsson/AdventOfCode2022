import Input from "./Input.js";
let grid = Input.split("\n").map((line) => line.split(""));
let startingPoints = [];
let [endR, endC] = [0, 0];
grid.forEach((row, rowIndex) =>
  row.forEach((cell, colIndex) => {
    if (cell === "S" || cell === "a") {
      startingPoints.push([rowIndex, colIndex]);
      grid[rowIndex][colIndex] = "a";
    }
    if (cell === "E") {
      [endR, endC] = [rowIndex, colIndex];
      grid[rowIndex][colIndex] = "z";
    }
  })
);
grid = grid.map((row) => row.map((cell) => cell.charCodeAt(0)));
const hasVisited = grid.map((row) => row.map(() => false));
const moves = [];
startingPoints.forEach((point) =>
  moves.push({ r: point[0], c: point[1], steps: 0 })
);
while (true) {
  const { r, c, steps } = moves.shift();
  if (r === endR && c === endC) {
    console.log(steps);
    break;
  }
  if (hasVisited[r][c]) {
    continue;
  }
  hasVisited[r][c] = true;
  if (r > 0 && grid[r - 1][c] <= grid[r][c] + 1) {
    moves.push({ r: r - 1, c: c, steps: steps + 1 });
  }
  if (r < grid.length - 1 && grid[r + 1][c] <= grid[r][c] + 1) {
    moves.push({ r: r + 1, c: c, steps: steps + 1 });
  }
  if (c > 0 && grid[r][c - 1] <= grid[r][c] + 1) {
    moves.push({ r: r, c: c - 1, steps: steps + 1 });
  }
  if (c < grid[0].length - 1 && grid[r][c + 1] <= grid[r][c] + 1) {
    moves.push({ r: r, c: c + 1, steps: steps + 1 });
  }
}
