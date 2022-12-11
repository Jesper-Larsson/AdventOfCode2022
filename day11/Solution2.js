import Input from "./Input.js";
const lines = Input.split("\n\n");
const monkeys = [];
lines.forEach((monkey) => {
  const monkeyLines = monkey.split("\n");
  const heldItems = monkeyLines[1]
    .split(": ")[1]
    .split(", ")
    .map((item) => parseInt(item));
  const [var1, operation, var2] = monkeyLines[2].split("= ")[1].split(" ");
  const divisorToCheck = parseInt(monkeyLines[3].split("by ")[1]);
  const alt1 = parseInt(monkeyLines[4].split("monkey ")[1]);
  const alt2 = parseInt(monkeyLines[5].split("monkey ")[1]);
  monkeys.push({
    items: heldItems,
    var1: var1,
    operation: operation,
    var2: var2,
    divisor: divisorToCheck,
    alt1: alt1,
    alt2: alt2,
    countOfInspections: 0
  });
});
let commonDivisor = monkeys
  .map((monkey) => monkey.divisor)
  .reduce((a, b) => a * b, 1);
const takeTurn = (monkeyIndex) => {
  let monkey = monkeys[monkeyIndex];
  monkey.items.forEach((item) => {
    const var1 = monkey.var1 === "old" ? item : parseInt(monkey.var1);
    const var2 = monkey.var2 === "old" ? item : parseInt(monkey.var2);
    let ans = monkey.operation === "+" ? var1 + var2 : var1 * var2;
    ans = ans % commonDivisor;
    if (ans % monkey.divisor === 0) {
      monkeys[monkey.alt1].items.push(ans);
    } else {
      monkeys[monkey.alt2].items.push(ans);
    }
    monkey.countOfInspections++;
  });
  monkey.items = [];
};
for (let i = 0; i < 10000; i++) {
  monkeys.forEach((monkey, index) => {
    takeTurn(index);
  });
}
console.log(
  monkeys
    .sort((a, b) => a.countOfInspections - b.countOfInspections)
    .reverse()
    .slice(0, 2)
    .map((monkey) => monkey.countOfInspections)
    .reduce((a, b) => a * b, 1)
);
