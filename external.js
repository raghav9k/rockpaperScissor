const readline = require('readline');

function getComputerChoice() {
  const min = Math.ceil(0);
  const max = Math.floor(2);
  const choice = Math.floor(Math.random() * (max - min + 1)) + min;
  const items = ["rock", "paper", "scissor"];
  return items[choice];
}

function playRound(user, computer) {
  user = user.toLowerCase();
  computer = computer.toLowerCase();
  if (user === computer) {
    console.log("It's a tie!");
  } else if (
    (user === "rock" && computer === "scissor") ||
    (user === "scissor" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    console.log(`You win! ${computer} beats ${user}`);
  } else {
    console.log(`You lose! ${user} beats ${computer}`);
  }
}

function getUserChoice() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Enter your choice (rock, paper, or scissors): ', (choice) => {
      const validChoice = choice.toLowerCase().trim();
      if (validChoice === 'rock' || validChoice === 'paper' || validChoice === 'scissors') {
        resolve(validChoice);
        rl.close();
      } else {
        console.log('Invalid choice. Please enter "rock", "paper", or "scissors".');
        getUserChoice().then(resolve);
      }
    });
  });
}

async function playGame() {
  const userChoice = await getUserChoice();
  const computerChoice = getComputerChoice();
  playRound(userChoice, computerChoice);
}

playGame();
