const choices = ["rock", "paper", "scissors"];

function getWinner(computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if (computerChoice === playerChoice) {
        return "draw";
    }

    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    }

    return "computer";

}

// where a round is played and decided. should return the winner or the updated scores
function playRound()
{
  console.log("in round");
  let playerSelection = prompt("enter your choice (rock / paper / scissors)");
  let compSelIndex = Math.floor(Math.random()*3);
  let computerSelection = choices[compSelIndex];
  console.log(`computer picked ${computerSelection}`);

  return(getWinner(computerSelection, playerSelection));
}

// where the game is played
function game()
{
  console.log("in game")
  let computerScore = 0;
  let playerScore = 0;

  while(computerScore < 3 && playerScore < 3) {
      winner = playRound();
      if (winner == "computer") {
          computerScore++;
          alert(`Computer WON!\n\nScores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
      } else if (winner == "player") {
          playerScore++;
          alert(`player WON!\n\nScores:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
      } else {
          alert('DRAW!\nPlay Again');
      }
  }

  if (playerScore == 3) {
      alert('game over. You WIN!');
  } else {
      alert('game over. Computer WINss!');
  }
  
}

// where the game starts. also handles cancel or restart
game();