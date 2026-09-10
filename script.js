// where the game is played
function game() {
    console.log("in game"); // DEBUG message (delete afterwards)
    // variables to store scores
    let computerScore = 0;
    let playerScore = 0;

    console.log("STARTING ROCK, PAPER, SCISSORS");

    // while each player did not reach 3 points
    while (computerScore < 3 && playerScore < 3) {
        // run the playRound function and get and store the winner's name
        let playerSelection = getPlayerSelection();

        // End game immediately if Cancel is clicked
        if (playerSelection === null) {
            console.log(`Game over: Cancelled by user.`);
            alert("Game cancelled. Thanks for playing!");
            return;
        }

        let computerSelection = computerPlay();

        console.log(`Player picked: ${playerSelection}`);
        console.log(`Computer picked: ${computerSelection}`);

        let winner = playRound(playerSelection, computerSelection);

        // if computer won
        if (winner === "computer") {
            // increase the computer's score by one
            computerScore++;
            // send an alert message that computer won, also display updated scores
            console.log(
                `COMPUTER WINS THIS ROUND! (${computerSelection} beats ${playerSelection})`,
            );
            alert(
                `Computer WON!\n\nScores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`,
            );

            // if player won
        } else if (winner === "player") {
            // increase the player's score by one
            playerScore++;
            // send an alert message that player won, also display updated scores
            console.log(
                `PLAYER WINS THIS ROUND! (${playerSelection} beats ${computerSelection})`,
            );
            alert(
                `You beat the computer!\n\nScores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`,
            );

            // if it was a draw
        } else {
            // send alert that it was a draw
            console.log(
                `DRAW (NO POINTS FOR EITHER PLAYER OR COMPUTER)`,
            );
            alert("DRAW!\nPlay Again");
        }
    }

    // if player got 3 points (won the game)
    if (playerScore === 3) {
        console.log(`END OF GAME: PLAYER WINS!`);
        alert("game over. You WIN!");
        // if computer won with 3 points
    } else {
        console.log(`END OF GAME: COMPUTER WINS!`);
        alert("game over. Computer WINss!");
    }
}

// where a round is played and decided. should return the winner or the updated scores
function getPlayerSelection() {
    while (true) {
        let input = prompt("enter your choice (rock / paper / scissors)");

        //Graceful exit if Cancel is pressed
        if (input === null) {
            return null;
        }

        //Clean input: trim surrounding space and convert to lowercase
        let cleanedInput = input.trim().toLowerCase();

        //Check if input matches an item in choices
        if (choices.includes(cleanedInput)) {
            return cleanedInput;
        }

        alert("Not a valid choice. Try again.");
    }
}

// computerPlay function returns random move. Requirement 2
function computerPlay() {
    let compSelIndex = Math.floor(Math.random() * 3);
    return choices[compSelIndex];
}

// playRound function returns the winner of the round
function playRound(playerSelection, computerSelection) {
    // make sure both options are in lowercase to account for any capitalized characters in the entry
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // if they had the same choice: its a draw
    if (computerSelection === playerSelection) {
        return "draw";
    }

    // if any combination that results in a player win:
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        // return the winner is player
        return "player";
    }

    // if its neither a draw, nor a player win, it must be a computer win
    return "computer";
}

// Run code:
// Explain console usage to the player up front. Requirement 1
alert(
    "Welcome! This game uses browser alerts and the Developer Console for logs.\n\n" +
        "To open the console:\n" +
        "• Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
        "• Mac: Press Cmd + Option + J\n\n" +
        "Click OK to start!",
);

// constant choices array with the 3 options for computer to pick during rounds
const choices = ["rock", "paper", "scissors"];

// Give the user 5 seconds after clicking OK to open the console before the game actually starts.
setTimeout(() => {
    game();
}, 10000);
