import Input from "./Input.js";
const letters = Input.split("");
for (let i = 0; i < letters.length; i++) {
  const letterStack = [];
  for (let j = 0; j < 4; j++) {
    if (letterStack.includes(letters[i + j])) {
      break;
    }
    letterStack.push(letters[i + j]);
  }
  if (letterStack.length === 4) {
    console.log(i + 4);
    break;
  }
}
