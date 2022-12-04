import Input1 from "./Input.js";
const isIncluded = (range, part) => {
  const [rangeStart, rangeEnd] = range.split("-").map((str) => parseInt(str));
  const [partStart, partEnd] = part.split("-").map((str) => parseInt(str));
  return rangeStart <= partStart && rangeEnd >= partEnd;
};
const assignments = Input1.split("\n").map((line) => {
  const [elf1, elf2] = line.split(",");
  return isIncluded(elf1, elf2) || isIncluded(elf2, elf1) ? 1 : 0;
});
console.log(assignments.reduce((a, b) => a + b, 0));
