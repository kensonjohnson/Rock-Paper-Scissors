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


    let computerChoice = computerPlay();

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
// set a variable for the player choice.
let playerSelection = null;

function game() {

    // run the game  5 times
    for (let i = 0; i < 5; i++) {

        // ask the player to input a choice and assign that to the players choice variable
        playerSelection = prompt('Please choose rock, paper, or scissors').toLowerCase();

        //make sure they picked a valid choice, else tell them to try again.
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            message = playRound(playerSelection);
        } else {
            message = "Please try again with a valid selection."
        }

        //log to console and then alert player of results
        console.log(message);
        alert(message);

    }
}

game();