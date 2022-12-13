import Input from "./Input.js";
let lines = Input.split("\n").filter((line) => line !== "");
lines.push("[[2]]");
lines.push("[[6]]");
const getSmallestItem = (item1, item2) => {
  if (typeof item1 === "number" && typeof item2 === "number") {
    return item1 === item2 ? -1 : item1 < item2 ? 1 : 2;
  }
  const leftArr = typeof item1 === "number" ? [item1] : item1;
  const rightArr = typeof item2 === "number" ? [item2] : item2;
  for (let i = 0; i < leftArr.length; i++) {
    if (i === rightArr.length) {
      return 2;
    }
    switch (getSmallestItem(leftArr[i], rightArr[i])) {
      case 2:
        return 2;
      case 1:
        return 1;
      default:
        break;
    }
  }
  return rightArr.length > leftArr.length ? 1 : -1;
};
lines.sort((line1, line2) => {
  const left = eval(line1);
  const right = eval(line2);
  return getSmallestItem(left, right) === 2 ? 1 : -1;
});
console.log((lines.indexOf("[[2]]") + 1) * (lines.indexOf("[[6]]") + 1));
