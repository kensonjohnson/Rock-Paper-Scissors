//Create a function that creates a choice for the computer.
//return that choice as a string.
function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() * options.length)]);
}

/* create a function that takes in the player's choice
as well as the generated computer choice. The choices are 
compared and a winner is chosen. Have this return
the results as a string that declares the player as a winner,
a loser, or that the game tied. */
function playRound(playerChoice) {

    //create the computer's choice
    let computerChoice = computerPlay();

    //compare the player's choice to the computer's choice and declare a winner if not a tie
    if (playerChoice == computerChoice) {
        return 'Its a tie! Play again!';
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerWin();
        return 'You win! Rock beats scissors.';
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerWin();
        return 'You lose! Paper beats rock.';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerWin();
        return 'You win! Scissors beats paper.';
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerWin();
        return 'You lose! Rock beats scissors.';
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerWin();
        return 'You win! Paper beats rock.';
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerWin();
        return 'You lose! Scissors beats paper.'
    }

}

//set round counter variable
let roundCount = 0;


//create function to update round count and diplay on screen
function updateRound() {
    roundCount++;
    document.getElementById("round-count").innerHTML = roundCount;
}



//set variable to hold player score
let playerScore = 0;

//create function that increments the player score and updates on screen
function playerWin() {
    playerScore++
    document.getElementById("player-score").innerHTML = playerScore;

}



//set variable to hold computer score
let computerScore = 0;

//create function that increments the computer score and updates on screen
function computerWin() {
    computerScore++
    document.getElementById("computer-score").innerHTML = computerScore;
}







//take in the player's choice and play a round, updating the score if possible
function game(playerSelection) {

    results = playRound(playerSelection);
    updateRound();
    if (playerScore >= 5) {
        endGame(true);
    }
    if (computerScore >= 5) {
        endGame(false);
    }


    //update results on screen
    document.getElementById("results").innerHTML = results;

}

// Create an array that selects all of our buttons on the page
const buttons = document.querySelectorAll('button');

//attach event listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});