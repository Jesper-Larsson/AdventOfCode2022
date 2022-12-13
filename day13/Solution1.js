import Input from "./Input.js";
let pairs = Input.split("\n\n");
const indiciesWhereCorrect = [];
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
pairs.forEach((pair, index) => {
  let [left, right] = pair.split("\n").map((arrStr) => eval(arrStr));
  if (getSmallestItem(left, right) < 2) {
    indiciesWhereCorrect.push(index + 1);
  }
});
console.log(indiciesWhereCorrect.reduce((a, b) => a + b, 0));
