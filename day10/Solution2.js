import Input from "./Input.js";
const lines = Input.split("\n");
let x = 1;
let cycle = 1;
let pixels = [];
lines.forEach((line) => {
  cycle = cycle % 40;
  const [startCycle, startX] = [cycle, x];
  const [operation, value] = line.split(" ");
  if (operation === "noop") {
    cycle++;
  } else {
    cycle += 2;
    x += parseInt(value);
  }
  for (let i = startCycle - 1; i < cycle - 1; i++) {
    i >= startX - 1 && i <= startX + 1 ? pixels.push("#") : pixels.push(".");
  }
});
pixels.forEach((pixel, index) => {
  process.stdout.write(pixel);
  if ((index + 1) % 40 === 0) {
    console.log();
  }
});
