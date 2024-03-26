
const playerChoices = document.querySelectorAll("#choice");
const currentRound = document.getElementById("currentRound")

// Initialize Players Score 
let playerScore = 0;
let computerScore = 0;

// Add a listener to every player options and run a round
playerChoices.forEach((choices) => {
    choices.addEventListener("click", () => {
    console.log(choices)
    playRound(choices.lastElementChild.textContent);
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
    document.getElementById("playerScore").textContent = `Player: ${playerScore}`;
    document.getElementById("computerScore").textContent = `Computer: ${computerScore}`;
}

// End Game after either the player or computer get 5 points
function endGame() {

    //Check for whoever have 5 points to end the game
    if(playerScore === 5)    {
        currentRound.textContent = "Player WIN - GAME OVER";
    }
    else if (computerScore === 5) {
        currentRound.textContent = "Computer WIN - GAME OVER";
    }

    //Disable Player Selection
    if(playerScore === 5 || computerScore === 5)
    {
        playerChoices.forEach((choices) =>{
            choices.setAttribute("disabled", "true")
        })
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
        currentRound.textContent = `You Win! |Player: ${playerSelection}| beats |Computer: ${computerSelection}|`;
        playerScore++    
    }
    // Tie Round
    else if(playerSelection == computerSelection) {
        currentRound.textContent = `It's a Tie, you both picked ${computerSelection}`;
    }
    // Lose Round
    else {
        currentRound.textContent = `You Lose! |Computer: ${computerSelection}| beats |Player: ${playerSelection}|`;
        computerScore++
    }
    
    updateScore()
    endGame()
    return;
}