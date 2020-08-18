let computerWins = 0;
let humanWins = 0;
let numOfGames = prompt("Welcome to Rock Paper Scissors.  How many games would you like to play?");
if (isNaN(numOfGames)) {
    console.log("invalid input.  Please enter a number");
    } else {
        numOfGames = parseInt(numOfGames);
    }

let computerPlay = function() {
   let computerSelection = "";
   let chance = Math.random();
   
   if (chance < .33) {
        computerSelection = "rock";
   } else if (chance > .66) {
        computerSelection = "paper";
   } else {
        computerSelection = "scissors";
   }
    return computerSelection;
}

let humanPlay = function() {
    let humanSelection = prompt("Rock paper or scissors?");
    humanSelection = humanSelection.toLowerCase();
    return humanSelection;
}

let score = function(winner) {
    if (winner === " Computer wins!") {
        computerWins += 1;
    }else if (winner === " Human wins!") {
        humanWins +=1;
    }
    console.log("Human has " + humanWins + " wins and Computer has " + computerWins + " wins.");
}

let game = function() {
    for (i=0; i < numOfGames; i++) {
        
        let humanMove = humanPlay();
        let computerMove = computerPlay();

        if (humanMove === computerMove) {
        winner = " Its a tie!!";
        }else if (humanMove === "rock" && computerMove == "scissors") {
        winner = " Human wins!"
        }else if (humanMove === "paper" && computerMove == "rock") {
        winner = " Human wins!"
        }else if (humanMove === "scissors" && computerMove == "paper") {
        winner = " Human wins!"
        }else if (humanMove === "scissors" && computerMove == "rock") {
        winner = " Computer wins!"
        }else if (humanMove === "paper" && computerMove == "scissors") {
        winner = " Computer wins!"
        }else if (humanMove === "rock" && computerMove == "paper") {
        winner = " Computer wins!"
        }else {
            console.log("if statement error")
        }
    console.log("Human plays " + humanMove + " and Computer plays " + computerMove + "." + winner);
        score(winner);

    }
 }
game(); 