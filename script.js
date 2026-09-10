// where the computer randomly chooses rock, paper or scissors

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
// where a round is played and decided. returns the result of the round

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
        alert(`You won the game! Final score: Player ${playerScore} - Computer ${computerScore}`);
    } else {
        console.log("Computer won the game!");
        alert(`Computer won the game! Final score: Computer ${computerScore} - Player ${playerScore}`);
    }
}

// where the game starts. also handles cancel or restart

function startGame() {
    alert(
        "ROCK, PAPER OR SCISSORS!\n\n" +
        "The first player to win 3 rounds wins the game.\n" +
        "Choose Rock, Paper or Scissors when prompted.\n\n" +
        "The browser console is required to follow the game results and score.\n" +
        "Chrome/Edge: Press F12 or Ctrl + Shift + J on Windows/Linux, or Command + Option + J on macOS.\n\n" +
        "Press Cancel at any time to end the game."
    );

    let playAgain = true;

    while (playAgain) {
        const gameResult = game();

        if (gameResult === null) {
            return;
        }

        playAgain = confirm("Would you like to play again?");
    }
}

startGame();