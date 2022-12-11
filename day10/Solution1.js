import Input from "./Input.js";
const lines = Input.split("\n");
const cyclesToWatch = [20, 60, 100, 140, 180, 220];
const signalStrengths = [];
let x = 1;
let cycle = 1;
lines.forEach((line) => {
  const [startCycle, startX] = [cycle, x];
  const [operation, value] = line.split(" ");
  if (operation === "noop") {
    cycle++;
  } else {
    cycle += 2;
    x += parseInt(value);
  }
  cyclesToWatch.forEach((cycleToWatch) => {
    if (cycleToWatch >= startCycle && cycleToWatch < cycle) {
      signalStrengths.push(startX * cycleToWatch);
    }
  });
});
console.log(signalStrengths.reduce((a, b) => a + b, 0));
