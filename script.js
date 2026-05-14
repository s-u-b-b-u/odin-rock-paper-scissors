
const MAX_ROUNDS = 6;
// Step 1: Write the logic to get the computer choice
function getComputerChoice() {
    
    const randomNumber = Math.floor(Math.random() * 6);

    const computerChoice = (randomNumber >=0 && randomNumber < 2 ? 'ROCK' :
                           randomNumber >=2 && randomNumber < 4 ? 'PAPER' :
                           'SCISSOR');

    return computerChoice;
}

// Step 2: Write the logic to get the human choice
function getHumanChoice() {

    const humanChoice = prompt("Enter your choice \n Available options 1.Rock 2.Paper 3.Scissor");

    return humanChoice.toUpperCase();
}

// Step 3: Declare the players score variables
let humanScore = 0;
let computerScore = 0;
