import Input1 from "./Input.js";
const elves = Input1.split("\n\n");
const elvesTotals = [];
elves.forEach((elfString) => {
  const elf = elfString.split("\n").map((numberText) => parseInt(numberText));
  elvesTotals.push(elf.reduce((a, b) => a + b, 0));
});
console.log(elvesTotals.sort((a, b) => b - a)[0]);
