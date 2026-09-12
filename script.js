// Explain console usage to the player up front. Requirement 1
alert(
    "Welcome! This game uses browser alerts and the Developer Console for logs.\n\n" +
        "To open the console:\n" +
        "• Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
        "• Mac: Press Cmd + Option + J\n\n" +
        "Type startGame() in the console and press Enter to begin.",
);

// constant choices array with the 3 options for computer to pick during rounds
const choices = ["Rock", "Paper", "Scissors"];

// ascii art for choices
const art = {
    Rock: `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`,

    Paper: `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`,

    Scissors: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`,
};

console.log('Type "startGame()" to begin!');

// Let the player start/restart from the console without refreshing
window.startGame = game;
window.playAgain = game;

// where the game is played
function game() {
    let playing = true;
    let roundCounter = 0;

    while (playing) {
        // variables to store scores
        let computerRoundScore = 0;
        let playerRoundScore = 0;

        console.log("STARTING ROCK, PAPER, SCISSORS");

        // while each player did not reach 3 points
        while (computerRoundScore < 3 && playerRoundScore < 3) {
            console.log(`======== ROUND ${++roundCounter} ========`);

            // run the playRound function and get and store the winner's name
            let playerSelection = getPlayerSelection();

            // End game immediately if Cancel is clicked
            if (playerSelection === null) {
                console.log("Game over: Cancelled by user");
                alert("Game cancelled. Thanks for playing!");
                return "Type playAgain() in the console to start a new game";
            }

            let computerSelection = computerPlay();

            console.log(
                `Player picked: ${playerSelection}\n${art[playerSelection]}`,
            );
            console.log(
                `Computer picked: ${computerSelection}\n${art[computerSelection]}`,
            );

            let winner = playRound(playerSelection, computerSelection);

            // if computer won
            if (winner === "computer") {
                // increase the computer's score by one
                computerRoundScore++;

                // send an alert message that computer won, also display updated scores
                console.log(
                    `COMPUTER WINS THIS ROUND! (${playerRoundScore} - ${computerRoundScore})`,
                );

                alert(
                    `Computer WON!\n\nScores:\nPlayer: ${playerRoundScore}\nComputer: ${computerRoundScore}`,
                );

                // if player won
            } else if (winner === "player") {
                // increase the player's score by one
                playerRoundScore++;

                // send an alert message that player won, also display updated scores
                console.log(
                    `YOU WIN THIS ROUND! (${playerRoundScore} - ${computerRoundScore})`,
                );

                alert(
                    `You beat the computer!\n\nScores:\nPlayer: ${playerRoundScore}\nComputer: ${computerRoundScore}`,
                );

                // if it was a draw
            } else {
                // send alert that it was a draw
                console.log(
                    `DRAW (${playerRoundScore} - ${computerRoundScore})`,
                );
                alert("DRAW!");
            }
        }

        // if player got 3 points (won the game)
        if (playerRoundScore === 3) {
            console.log(
                `END OF GAME: You WIN! (${playerRoundScore} - ${computerRoundScore})`,
            );

            alert("Game over! You Win!");

            // if computer won with 3 points
        } else {
            console.log(
                `END OF GAME: COMPUTER WINS! (${playerRoundScore} - ${computerRoundScore})`,
            );

            alert("Game over! Computer Wins!");
        }

        roundCounter = 0;
        playing = confirm("Do you want to play again?");
    }

    return "Type playAgain() in the console to start a new game";
}

// gets the player's choice and returns it
function getPlayerSelection() {
    while (true) {
        let input = prompt("Enter your choice (Rock / Paper / Scissors)");

        //Graceful exit if Cancel is pressed
        if (input === null) {
            return null;
        }

        //Clean input: trim surrounding space and convert to correct case
        let cleanedInput = capitalizeAndTrim(input);

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

// where a round is played and decided. should return the winner
function playRound(playerSelection, computerSelection) {
    // if they had the same choice: its a draw
    if (computerSelection === playerSelection) {
        return "draw";
    }

    // if any combination that results in a player win:
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        // return the winner is player
        return "player";
    }

    // if its neither a draw, nor a player win, it must be a computer win
    return "computer";
}

const capitalizeAndTrim = (word) => {
    if (!word) return "";
    const cleaned = word.trim();
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
};
