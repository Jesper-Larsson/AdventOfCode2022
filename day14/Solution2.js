import Input from "./Input.js";
let coordinates = Input.split("\n").map((row) =>
  row
    .split(" -> ")
    .map((coordStr) => coordStr.split(",").map((str) => parseInt(str)))
);
let blockedCoordinates = [];
coordinates.forEach((rockPath) => {
  for (let i = 0; i < rockPath.length - 1; i++) {
    const coord1 = rockPath[i];
    const coord2 = rockPath[i + 1];
    const [minX, maxX] = [coord1[0], coord2[0]].sort((a, b) => a - b);
    for (let x = minX; x <= maxX; x++) {
      if (!blockedCoordinates.includes(x + ", " + coord1[1]))
        blockedCoordinates.push(x + ", " + coord1[1]);
    }
    const [minY, maxY] = [coord1[1], coord2[1]].sort((a, b) => a - b);
    for (let y = minY; y <= maxY; y++) {
      if (!blockedCoordinates.includes(coord1[0] + ", " + y))
        blockedCoordinates.push(coord1[0] + ", " + y);
    }
  }
});
const maxDepth =
  Math.max(
    ...blockedCoordinates.map((coordStr) => parseInt(coordStr.split(", ")[1]))
  ) + 2;
const nrOfRocks = blockedCoordinates.length;
let i = 0;
while (true) {
  let x = 500,
    y = 0;
  while (y < maxDepth - 1) {
    if (!blockedCoordinates.includes(x + ", " + (y + 1))) {
      y++;
    } else if (!blockedCoordinates.includes(x - 1 + ", " + (y + 1))) {
      y++;
      x--;
    } else if (!blockedCoordinates.includes(x + 1 + ", " + (y + 1))) {
      y++;
      x++;
    } else {
      blockedCoordinates.push(x + ", " + y);
      break;
    }
  }
  blockedCoordinates.push(x + ", " + y);
  if (y === 0) {
    break;
  }
}
console.log(blockedCoordinates.length - nrOfRocks);
