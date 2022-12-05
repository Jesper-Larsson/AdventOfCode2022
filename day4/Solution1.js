import Input1 from "./Input.js";
const getEdges = (range) => range.split("-").map((str) => parseInt(str));
const isIncluded = (range, part) => {
  const [rangeStart, rangeEnd] = getEdges(range);
  const [partStart, partEnd] = getEdges(part);
  return rangeStart <= partStart && rangeEnd >= partEnd;
};
const isIncludedAssingments = Input1.split("\n").map((line) => {
  const [elf1, elf2] = line.split(",");
  return isIncluded(elf1, elf2) || isIncluded(elf2, elf1) ? 1 : 0;
});
console.log(isIncludedAssingments.reduce((a, b) => a + b, 0));
