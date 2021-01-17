let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generates random number as target
function generateTarget() {return Math.floor(Math.random() * 10)}

// Gets the distance from guess. Numbers orderd with Math.min/max to avoid -number
function getAbsoluteDistance(guess,target) {
    return Math.max(guess, target) - Math.min(guess,target)
}

// Compare guesses and return true if distance from guess is <= computer. Logic favors human.
function compareGuesses(humanGuess, computerGuess, targetNumber) {

    let humanDistance = getAbsoluteDistance(humanGuess, targetNumber)
    let computerDistance = getAbsoluteDistance(computerGuess, targetNumber)
    
    // Eliminated the need for if statement with tenary 
    return humanDistance <= computerDistance ? true : false       
}

function updateScore(winner) {
    return winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {currentRoundNumber++}