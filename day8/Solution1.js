import Input from "./Input.js";
const cells = Input.split("\n").map((line) => line.split(""));
const isVisible = cells.map((row) => row.map(() => 0));
for (let row = 0; row < cells.length; row++) {
    for (let col = 0; col < cells[0].length; col++) {
        const maxLeft = Math.max(...cells[row].slice(0, col));
        const maxRight = Math.max(...cells[row].slice(col + 1));
        const maxAbove = Math.max(
            ...cells.map((rowToEval) => rowToEval[col]).slice(0, row)
        );
        const maxBelow = Math.max(
            ...cells.map((rowToEval) => rowToEval[col]).slice(row + 1)
        );
        if (cells[row][col] > Math.min(maxLeft, maxRight, maxAbove, maxBelow)) {
            isVisible[row][col] = 1;
        }
    }
}
const rowTotals = isVisible.map((row) => row.reduce((a, b) => a + b, 0));
console.log(rowTotals.reduce((a, b) => a + b, 0));