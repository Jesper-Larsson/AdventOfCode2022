import Input from "./Input.js";
const cells = Input.split("\n").map((line) => line.split(""));
const scenticValues = cells.map((row) => row.map(() => 0));
const getNrOfSeenTrees = (treeList, treeSize) => {
    let seenTrees = 0;
    for (let i = 0; i < treeList.length; i++) {
        seenTrees++;
        if (treeList[i] >= treeSize) {
            break;
        }
    }
    return seenTrees;
};
for (let row = 0; row < cells.length; row++) {
    for (let col = 0; col < cells[0].length; col++) {
        const maxLeft = getNrOfSeenTrees(
            cells[row].slice(0, col).reverse(),
            cells[row][col]
        );
        const maxRight = getNrOfSeenTrees(
            cells[row].slice(col + 1),
            cells[row][col]
        );
        const maxAbove = getNrOfSeenTrees(
            cells
            .map((rowToEval) => rowToEval[col])
            .slice(0, row)
            .reverse(),
            cells[row][col]
        );
        const maxBelow = getNrOfSeenTrees(
            cells.map((rowToEval) => rowToEval[col]).slice(row + 1),
            cells[row][col]
        );
        scenticValues[row][col] = maxLeft * maxRight * maxAbove * maxBelow;
    }
}
const rowMaxValues = scenticValues.map((row) =>
    row.reduce((a, b) => Math.max(a, b), 0)
);
console.log(Math.max(...rowMaxValues));