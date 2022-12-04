import Input1 from "./Input.js";
const getEdges = (range) => range.split("-").map((str) => parseInt(str));
const isOverLapping = (range1, range2) => {
  const [range1Start, range1End] = getEdges(range1);
  const [range2Start, range2End] = getEdges(range2);
  return (
    (range1Start >= range2Start && range1Start <= range2End) ||
    (range1End >= range2Start && range1End <= range2End) ||
    (range2Start >= range1Start && range2Start <= range1End) ||
    (range2End >= range1Start && range2End <= range1End)
  );
};
const isIncludedAssingments = Input1.split("\n").map((line) => {
  const [elf1, elf2] = line.split(",");
  return isOverLapping(elf1, elf2) ? 1 : 0;
});
console.log(isIncludedAssingments.reduce((a, b) => a + b, 0));
