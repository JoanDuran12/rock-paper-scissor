

const playerChoices = document.querySelectorAll("#choice");
const gameResult = document.getElementById("gameResults");
const currentRound = document.createElement("p")
gameResult.appendChild(currentRound);

// Initialize Players Score 
let playerScore = 0;
let computerScore = 0;

// Add a listener to every player options and run a round
playerChoices.forEach((choices) => {
    choices.addEventListener("click", () => {
    playRound(choices.textContent);
    })    
})

// Get computer random choice
function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

// Update Game Score
function updateScore() {
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// End Game after either the player or computer get 5 points
function endGame() {
    if(playerScore >= 5)
    {
        currentRound.textContent = "Player WIN - GAME OVER";
    }
    else if (computerScore >= 5) {
        currentRound.textContent = "Computer WIN - GAME OVER";
    }
}

// Play a round and return the result
function playRound(playerSelection)
{   
    const computerSelection = getComputerChoice();

    // Win Round
    if((playerSelection == "Rock" && computerSelection == "Scissors")||
       (playerSelection == "Paper" && computerSelection == "Rock") ||
       (playerSelection == "Scissors" && computerSelection == "Paper")) {
        currentRound.textContent = `You Win! Player Chose ${playerSelection} beats Computer chose ${computerSelection}`;
        playerScore++    
    }
    // Tie Round
    else if(playerSelection == computerSelection) {
        currentRound.textContent = `It's a Tie, you both picked ${computerSelection}`;
    }
    // Lose Round
    else {
        currentRound.textContent = `You Lose! Computer chose ${computerSelection} beats Player chose ${playerSelection}`;
        computerScore++
    }
    
    updateScore()
    endGame()
    return;
}