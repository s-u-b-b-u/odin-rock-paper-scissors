
const MAX_ROUNDS = 6;
// Step 1: Write the logic to get the computer choice
function getComputerChoice() {
    
    const randomNumber = Math.floor(Math.random() * 6);

    const computerChoice = (randomNumber >=0 && randomNumber < 2 ? 'ROCK' :
                           randomNumber >=2 && randomNumber < 4 ? 'PAPER' :
                           'SCISSOR');

    return computerChoice;
}
