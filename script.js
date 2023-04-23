// Rock Paper Scissors //

let computerSelection;

function getComputerPlay () {
    let roll = Math.floor(Math.random() * 101);     
    if (roll <= 33) {
        computerSelection = "Rock";
    } else if (roll >= 66) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}

console.log(getComputerPlay());