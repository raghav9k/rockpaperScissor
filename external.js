// Create a function to select a computer option
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3); // returns 0, 1, or 2
  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else if (randomInt === 2) {
    return "scissors";
  }
}
// Create a function to get a user option
function getUserChoice() {
  let userChoice = prompt("Rock, paper, or scissors?");
  const options = ["rock", 'paper', 'scissors'];
  while (options.indexOf(userChoice.toLowerCase()) === -1) {
    alert("not a valid option. Please select rock, paper, or scissors");
    userChoice = prompt("Rock, paper, or scissors?");
  }
    return userChoice.toLowerCase();
  }

// Create a function to play a round
function playRound() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  if ((userChoice == "rock") && (computerChoice == "paper")) {
    computerScore++;
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "paper") && (computerChoice == "scissors")) {
    computerScore++;
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "scissors") && (computerChoice == "rock")) {
    computerScore++;
    alert(`You lose. ${computerChoice} beats ${userChoice}.`);
  } else if ((userChoice == "rock") && (computerChoice == "scissors")) {
    userScore++;
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if ((userChoice == "paper") && (computerChoice == "rock")) {
    userScore++;
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if ((userChoice == "scissors") && (computerChoice == "paper")) {
    userScore++;
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
  } else if (userChoice == computerChoice) {
    alert("It's a tie!")
  }
}

// Create function to play the entire game
function playGame(numberOfRounds=5) {
  userScore = 0;
  computerScore = 0;
  while (numberOfRounds > 0) {
    playRound();
    numberOfRounds--;
  }
  alert(`Final score: User: ${userScore}, Computer: ${computerScore}`);
}

// Call the playGame function
playGame();