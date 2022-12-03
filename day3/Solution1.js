import Input1 from "./Input.js";
const lines = Input1.split("\n");
const commonLetters = lines.map((line) => {
  const firstComp = line.substr(0, line.length / 2).split("");
  const secondComp = line.substr(line.length / 2, line.length).split("");
  const commonLettersWithDoubles = firstComp.filter((char) =>
    secondComp.includes(char)
  );
  return commonLettersWithDoubles[0];
});
const poinstPerLetter = commonLetters.map((char) =>
  char.charCodeAt(0) < "a".charCodeAt(0)
    ? 27 + (char.charCodeAt(0) - "A".charCodeAt(0))
    : 1 + (char.charCodeAt(0) - "a".charCodeAt(0))
);
console.log(poinstPerLetter.reduce((a, b) => a + b, 0));
