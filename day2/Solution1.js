import Input1 from "./Input.js";
const gameRounds = Input1;
const charToChoice = {
    A: "Rock",
    B: "Paper",
    C: "Scissors",
    X: "Rock",
    Y: "Paper",
    Z: "Scissors",
};
const choiceToPoints = { Rock: 1, Paper: 2, Scissors: 3 };
const getPoints = (playerChoice, opponentChoice) => {
    let points = choiceToPoints[playerChoice];
    if (playerChoice === opponentChoice) {
        points += 3;
    }
    if (
        (playerChoice === "Rock" && opponentChoice === "Scissors") ||
        (playerChoice === "Paper" && opponentChoice === "Rock") ||
        (playerChoice === "Scissors" && opponentChoice === "Paper")
    ) {
        points += 6;
    }
    return points;
};

let roundPoints = gameRounds.split("\n").map((string) => {
    const yourChoice = charToChoice[string[2]];
    const elfChoice = charToChoice[string[0]];
    return getPoints(yourChoice, elfChoice);
});

console.log(roundPoints.reduce((a, b) => a + b, 0));