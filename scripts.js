
let playerScore = 0
let computerScore = 0

function getComputerChoice()
{
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection)
{   
    // Win Round
    if((playerSelection == "ROCK" && computerSelection == "SCISSORS")||
       (playerSelection == "PAPER" && computerSelection == "ROCK") ||
       (playerSelection == "SCISSORS" && computerSelection == "PAPER"))
    {
        playerScore++
        console.log(`You Win! Player Chose ${playerSelection} beats Computer chose ${computerSelection}`)
        return 1        
    }
    // Round Tie
    else if(playerSelection == computerSelection)
    {
        console.log(`It's a Tie, you both picked ${computerSelection}`)
        return 0
    }
    
    // Lose Round
    computerScore++
    console.log( `You Lose! Computer chose ${computerSelection} beats Player chose ${playerSelection}`)
    return -1
}

function game()
{
    // Play until one of the player gets 5 points
    for(let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Enter your Choice - Rock, Paper, Scissor")
        playerSelection = playerSelection.toUpperCase()

        let result = playRound(playerSelection, computerSelection)
        if(result == 0) {
            i--;
        }
    }

    // Win Game
    if(playerScore > computerScore)
    {
       return `You Won the game, Player: ${playerScore} vs Computer: ${computerScore}`
    }
    // Tie Game
    else if(playerScore == computerScore){
        return ` It's a Tie,  Player: ${playerScore} vs Computer: ${computerScore}`
    }

    // Lose Game
    return `You Lose the game, Computer: ${computerScore} vs Player: ${playerScore}`


}

console.log(game())