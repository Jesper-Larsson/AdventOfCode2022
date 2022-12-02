import Input1 from "./Input.js";
const gameRounds = Input1;
const charToChoice = {
    A: "Rock",
    B: "Paper",
    C: "Scissors"
};
const charToObjective = {
    X: "Lose",
    Y: "Draw",
    Z: "Win"
};
const makeChoice = (opponentChoice, objective) => {
    if(objective === "Draw"){
        return opponentChoice;
    }
    switch(opponentChoice){
        case "Rock": return objective ==="Win"? "Paper":"Scissors";
        case "Paper": return objective ==="Win"?"Scissors": "Rock";
        default: return objective ==="Win"?"Rock":"Paper";
    }
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
    const elfChoice = charToChoice[string[0]];
    const yourChoice = makeChoice(elfChoice, charToObjective[string[2]]);
    return getPoints(yourChoice, elfChoice);
});

console.log(roundPoints.reduce((a, b) => a + b, 0));