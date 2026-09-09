// constant choices array with the 3 options for computer to pick during rounds
const choices = ["rock", "paper", "scissors"];

// Explain console usage to the player up front
setTimeout(() => {
  alert(
    "Welcome! This game uses browser alerts and the Developer Console for logs.\n\n" +
    "To open the console:\n" +
    "• Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
    "• Mac: Press Cmd + Option + J\n\n" +
    "Click OK to start!"
  );
}, 5000);// 5 seconds delay.
function getWinner(computerChoice, playerChoice) {
    // make sure both options are in lowercase to account for any capitalized characters in the entry
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // if they had the same cohise: its a draw
    if (computerChoice === playerChoice) {
        return "draw";
    }

    // if any combination that results in a player win:
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // return the winner is player
        return "player";
    }

    // if its neither a draw, nor a player win, it must be a computer win
    return "computer";
}

// where a round is played and decided. should return the winner or the updated scores
function playRound() {
    console.log("in round"); // DEBUG message (delete afterwards)

    // the default is that the selection is valid
    let invalidSelection = false;

    let playerSelection = "";

    // post-condition loop
    do {
        // ask the player using prompt to enter their choice. store the choice in the playerSelection variable
        playerSelection = prompt(
            "enter your choice (rock / paper / scissors)",
        );

        // if valid choice entered
        if (choices.includes(playerSelection.toLowerCase())) {
            // valid
            invalidSelection = false;
            // debug (delete)
            console.log(`player picked ${playerSelection.toLowerCase()}`);
        } else {
            // invalid
            invalidSelection = true;
            // debug (delete)
            console.log(`player picked ${playerSelection.toLowerCase()}`);
            alert("not a valid choice. try again");
        }
    
    // will keep looping if invalid choice is entered
    } while (invalidSelection);

    // Math.floor(Math.random() * 3) generates a random number between 0 and 2
    // this is the array index (0, 1, 2) that will pick a cohice from the choices array
    let compSelIndex = Math.floor(Math.random() * 3);

    // pick the Xth option in the array. this is the random choice by the computer
    let computerSelection = choices[compSelIndex];

    // write a message to the console about the computer's choice
    console.log(`computer picked ${computerSelection}`);

    // get the winner of the two options using the return of the getWinner function
    let winner = getWinner(computerSelection, playerSelection);

    // retunr the winnner
    return winner;
}

// where the game is played
function game() {
    console.log("in game"); // DEBUG message (delete afterwards)
    // variables to store scores
    let computerScore = 0;
    let playerScore = 0;

    // while each player did not reach 3 points
    while (computerScore < 3 && playerScore < 3) {
        // run the playRound function and get and store the winner's name
        winner = playRound();

        // if computer won
        if (winner == "computer") {
            // increase the computer's score by one
            computerScore++;
            // send an alert message that computer won, also display updated scores
            alert(
                `Computer WON!\n\nScores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`,
            );

            // if player won
        } else if (winner == "player") {
            // increase the player's score by one
            playerScore++;
            // send an alert message that player won, also display updated scores
            alert(
                `player WON!\n\nScores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`,
            );

            // if it was a draw
        } else {
            // send alert that it was a draw
            alert("DRAW!\nPlay Again");
        }
    }

    // if player got 3 points (won the game)
    if (playerScore == 3) {
        alert("game over. You WIN!");
        // if computer won with 3 points
    } else {
        alert("game over. Computer WINss!");
    }
}

// where the game starts. also handles cancel or restart
game();
