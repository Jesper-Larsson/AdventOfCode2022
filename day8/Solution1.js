import Input from "./Input.js";
const cells = Input.split("\n").map((line) => line.split(""));
const isVisible = cells.map((row) => row.map((cell) => 0));
for (let row = 0; row < cells.length; row++) {
    //isVisible[row] = [];
    for (let col = 0; col < cells.length; col++) {
        console.log("------------");
        console.log("checking r: " + row + " col: " + col);

        //edges
        if (
            col === 0 ||
            col === cells[0].length - 1 ||
            row === 0 ||
            row === cells.length - 1
        ) {
            isVisible[row][col] = 1;
            continue;
        }
        //right
        let maxSize = 0;
        for (let colToCheck = 0; colToCheck < col; colToCheck++) {
            if (cells[row][colToCheck] > maxSize) {
                console.log("max: " + cells[row][colToCheck]);
                console.log("checked col: " + colToCheck);
                maxSize = cells[row][colToCheck];
            }
        }
        if (cells[row][col] > maxSize) {
            isVisible[row][col] = 1;
            continue;
        }
        //left
        maxSize = 0;
        for (let colToCheck = cells[0].length - 1; colToCheck > col; colToCheck--) {
            if (cells[row][colToCheck] > maxSize) {
                maxSize = cells[row][colToCheck];
            }
        }
        if (cells[row][col] > maxSize) {
            isVisible[row][col] = 1;
            continue;
        }
        //down
        maxSize = 0;
        for (let rowToCheck = 0; rowToCheck < row; rowToCheck++) {
            if (cells[rowToCheck][col] > maxSize) {
                maxSize = cells[rowToCheck][col];
            }
        }
        if (cells[row][col] > maxSize) {
            isVisible[row][col] = 1;
            continue;
        }
        //up
        maxSize = 0;
        for (let rowToCheck = row.length - 1; rowToCheck > row; rowToCheck--) {
            if (cells[rowToCheck][col] > maxSize) {
                maxSize = cells[rowToCheck][col];
            }
        }
        if (cells[row][col] > maxSize) {
            isVisible[row][col] = 1;
        }
    }
}
const rowTotals = isVisible.map((row) => row.reduce((a, b) => a + b, 0));
rowTotals.forEach((row) => {
    console.log(row);
});

for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[0].length; c++) {
        process.stdout.write("" + isVisible[r][c]);
    }
    console.log("");
}
console.log("----");
for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[0].length; c++) {
        process.stdout.write("" + cells[r][c]);
    }
    console.log("");
}