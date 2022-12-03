import Input1 from "./Input.js";
const lines = Input1.split("\n");
const commonLetters = [];
for (let i = 2; i < lines.length; i += 3) {
  const commonLettersWithDoubles = lines[i - 2]
    .split("")
    .filter(
      (char) =>
        lines[i - 1].split("").includes(char) &&
        lines[i].split("").includes(char)
    );
  commonLetters.push(commonLettersWithDoubles[0]);
}
const poinstPerLetter = commonLetters.map((char) =>
  char.charCodeAt(0) < "a".charCodeAt(0)
    ? 27 + (char.charCodeAt(0) - "A".charCodeAt(0))
    : 1 + (char.charCodeAt(0) - "a".charCodeAt(0))
);
console.log(poinstPerLetter.reduce((a, b) => a + b, 0));
