
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

// Step 4: Write the logic to play a single round

function calculateResult(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "Tie!";
    }else if (humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScore += 1;
        return "YOU LOSE";
    }else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanChoice += 1;
        return "YOU WON!!!!!"
    }else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
        humanChoice += 1;
        return "YOU WON!!!!!";
    } else if(humanChoice === "SCISSOR" && computerChoice === "ROCK") {
        computerChoice += 1;
        return "YOU LOSE";
    }else if(humanChoice === "PAPER" && computerChoice === "SCISSOR") {
        computerChoice += 1;
        return "YOU LOSE";
    }else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
        humanChoice += 1;
        return "YOU WON!!!!!";
    }else{
        return "Enter correct input / Check spelling";
    }
}


// Step 5: Write the logic to play the entire game


function playGame() {

    function playRound() {
    
        const computerChoice = getComputerChoice();
    
        const humanChoice = getHumanChoice();
    
        const result = calculateResult(humanChoice, computerChoice);
    
        console.log( "Computer Choice:",computerChoice, "----- Human Choice:", humanChoice
            , "\nHuman Score: ", humanScore, "----Computer Score: ", computerScore,
            "\n\n -----", result, "------"
        );
    }

    for (let round = 0; round < MAX_ROUNDS; round++) {
        playRound();
    }
}

playGame();