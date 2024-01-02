
function getComputerChoice()
{
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection)
{   
    // Wins
    if((playerSelection == "ROCK" && computerSelection == "SCISSORS")||
       (playerSelection == "PAPER" && computerSelection == "ROCK") ||
       (playerSelection == "SCISSORS" && computerSelection == "PAPER"))
    {
        return 1        
    }
    // Ties
    else if(playerSelection == computerSelection)
    {
        return 0
    }
    
    // Loses
    return -1
}

function game()
{
    for(let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Enter your Choice - Rock, Paper, Scissor")
        playerSelection = playerSelection.toUpperCase()
        let result = playRound(playerSelection, computerSelection)

        // wins
        if(result == 1){
            alert(`You Win! Player Chose ${playerSelection} beats Computer chose ${computerSelection}`)
        }
        //Tie
        else if(result == 0){
            alert(`It's a Tie, you both picked ${computerSelection}`)
            i--;
        }   
        // Lose
        else{
            alert( `You Lose! Computer chose ${computerSelection} beats Player chose ${playerSelection}`)
        }
    }
}

console.log(game())