alert(
    "Welcome! This game uses browser alerts and the Developer Console for logs.\n\n" +
        "To open the console:\n" +
        "• Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
        "• Mac: Press Cmd + Option + J\n\n" +
        "Type startGame() in the console and press Enter to begin.",
);

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


function game() {
    let playing = true;
    let roundCounter = 0;

    while (playing) {
        
        let computerRoundScore = 0;
        let playerRoundScore = 0;

        console.log("STARTING ROCK, PAPER, SCISSORS");

        while (computerRoundScore < 3 && playerRoundScore < 3) {
            console.log(`======== ROUND ${++roundCounter} ========`);

            let playerSelection = getPlayerSelection();

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

            if (winner === "computer") {
                
                computerRoundScore++;

                console.log(
                    `COMPUTER WINS THIS ROUND! (${playerRoundScore} - ${computerRoundScore})`,
                );
                alert(
                    `Computer WON!\n\nScores:\nPlayer: ${playerRoundScore}\nComputer: ${computerRoundScore}`,
                );

            } else if (winner === "player") {
                playerRoundScore++;

                console.log(
                    `YOU WIN THIS ROUND! (${playerRoundScore} - ${computerRoundScore})`,
                );

                alert(
                    `You beat the computer!\n\nScores:\nPlayer: ${playerRoundScore}\nComputer: ${computerRoundScore}`,
                );
                
            } else {
        
                console.log(
                    `DRAW (${playerRoundScore} - ${computerRoundScore})`,
                );
                alert("DRAW!");
            }
        }

        if (playerRoundScore === 3) {
            console.log(
                `END OF GAME: You WIN! (${playerRoundScore} - ${computerRoundScore})`,
            );

            alert("Game over! You Win!");

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

        if (input === null) {
            return null;
        }

        let cleanedInput = capitalizeAndTrim(input);

        if (choices.includes(cleanedInput)) {
            return cleanedInput;
        }

        alert("Not a valid choice. Try again.");
    }
}

// computerPlay function returns random move
function computerPlay() {
    let compSelIndex = Math.floor(Math.random() * 3);
    return choices[compSelIndex];
}

// where a round is played and decided. should return the winner
function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
        return "draw";
    }

    // combinations that results in a player win:
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
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
