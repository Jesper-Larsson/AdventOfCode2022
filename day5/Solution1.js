import Input from "./Input.js";
const [cargo, moves] = Input.split("\n\n");
const stacks = [];
const cargoRows = cargo.split("\n");
for (let row = cargoRows.length - 2; row >= 0; row--) {
  for (let c = 1; c < cargoRows[row].length; c += 4) {
    const col = Math.floor(c / 4);
    if (!stacks[col]) {
      stacks[col] = [];
    }
    if (cargoRows[row][c] !== " ") {
      stacks[col].push(cargoRows[row][c]);
    }
  }
}
moves.split("\n").forEach((move) => {
  const [, count, , dest, , target] = move.split(" ");
  for (let i = 0; i < count; i++) {
    stacks[target - 1].push(stacks[dest - 1].pop());
  }
});
let result = "";
stacks.forEach((stack) => {
  result += stack.pop();
});
console.log(result);
