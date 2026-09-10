// where a round is played and decided. should return the winner or the updated scores]

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";

    } else if (randomNumber === 1) {
        return "paper";

    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    while (true) {
        const playerInput = prompt("Choose Rock, Paper or Scissors:");

        if (playerInput === null) {
            return null;
        }

        const choice = playerInput.trim().toLowerCase();

        if (
            choice === "rock" ||
            choice === "paper" ||
            choice === "scissors"
        ) {
            return choice;
        }
        alert("Invalid choice. Please, choose Rock, Paper or Scissors.")

    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {
            winner: "Draw",
            message: `It's a draw! You both chose ${playerSelection}.`
        };
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return {
            winner: "Player",
            message: `You win! ${playerSelection} beats ${computerSelection}.`
        };

    } else {
        return {
            winner: "Computer",
            message: `You lose! ${computerSelection} beats ${playerSelection}.`
        };
    }
}

// where the game is played
function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = getPlayerChoice();

        if (playerSelection === null) {
            return null;
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if (result.winner === "Player") {
            playerScore++;
        } else if (result.winner === "Computer") {
            computerScore++;
        }

        console.log(result.message);
        console.log(`Score - Player: ${playerScore} | Computer: ${computerScore}`);
    }

    if (playerScore === 3) {
        console.log("You won the game!");
    } else {
        console.log("Computer won the game!");
    }
}

// where the game starts. also handles cancel or restart

game();