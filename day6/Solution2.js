import Input from "./Input.js";
const letters = Input.split("");
for (let i = 0; i < letters.length; i++) {
  const letterStack = [];
  for (let j = 0; j < 14; j++) {
    if (letterStack.includes(letters[i + j])) {
      break;
    }
    letterStack.push(letters[i + j]);
  }
  if (letterStack.length === 14) {
    console.log(i + 14);
    break;
  }
}
