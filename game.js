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
        return 'You win! Rock beats scissors.';
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 'You lose! Rock beats scissors.';
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 'You lose! Scissors beats paper.'
    }

}

//take in the player's choice and play a round, updating the score if possible
function game(playerSelection) {

    results = playRound(playerSelection);


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