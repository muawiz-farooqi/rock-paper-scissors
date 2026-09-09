// where a round is played and decided. should return the winner or the updated scores]

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";

    } else if (randomNumber === 1) {
        return "Paper";

    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {
            winner: "Draw",
            message: `It's a draw! You both chose ${playerSelection}.`
        };
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return {
            winner: "Player",
            message: `You win! ${playerSelection} beats ${computerSelection}.`
        };
        
    }
}

// where the game is played
function game()
{

}

// where the game starts. also handles cancel or restart

console.log(playRound("Rock", "Scissors"));
console.log(playRound("Paper", "Rock"));
console.log(playRound("Scissors", "Paper"));