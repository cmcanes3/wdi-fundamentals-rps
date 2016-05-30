////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Do you choose rock, paper, or scissors?");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput().
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ((playerMove=="rock" && computerMove=="paper") || (playerMove=="paper" && computerMove=="scissors") || (playerMove=="scissors" && computerMove=="rock")) {
        winner="COMPUTER WINS!";
    }else if ((computerMove=="rock" && playerMove=="paper") || (computerMove=="paper" && playerMove=="scissors") || (computerMove=="scissors" && playerMove=="rock")) {
	    winner="PLAYER WINS!";
	}else if (playerMove==computerMove) {
	    winner="TIE!";
	}else { 
	    winner="Error. Please try again.";
	}
        return winner;
	}

var playToFive = function() {
    console.log('Let\'s play Rock Paper Scissors');
	var playerWins = 0;
    var computerWins = 0;
    
    while ((playerWins<5) && (computerWins<5)) {
	    var playerMove = getInput();
	    var computerMove = randomPlay();
    if (winner=="PLAYER WINS!"){
		playerWins+=1;
	}else if (winner=="COMPUTER WINS!"){
		computerWins+=1;
	}else {
	   playerWins+=0;
       computerWins+=0;
	}	
    console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove+ '.');
    console.log(winner=getWinner(playerMove, computerMove));
    console.log("The score is currently "+playerWins+" to "+ computerWins+"\n");
}
	
	return [playerWins, computerWins];

};
playToFive();
