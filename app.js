let humanSelection = ""
let computerWins = 0;
let humanWins = 0;
let gameNum = 0;

const scoreboard = document.querySelector('#scoreboard');
const announce = document.querySelector('#announce');

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');

//let numOfGames = function() {
//    gameNum = prompt("Welcome to Rock Paper Scissors.  How many games would you like to play?");
//}
//numOfGames();

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
    humanSelection = humanSelection.toLowerCase();
    return humanSelection;
}

let score = function(winner) {
    if (winner === " Computer wins!") {
        computerWins += 1;
    }else if (winner === " Human wins!") {
        humanWins +=1;
    }
    scoreboard.textContent = humanWins + "   -   " + computerWins;
    console.log("Human has " + humanWins + " wins and Computer has " + computerWins + " wins.");
}

let game = function() {
        
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
        score(winner);
        announce.textContent = "Human plays " + humanMove + " and Computer plays " + computerMove + "." + winner;
        
 }

rockbtn.addEventListener('click', () => {
    humanSelection = 'rock';
    game();
})

paperbtn.addEventListener('click', () => {
    humanSelection = 'paper';
    game();
})

scissorsbtn.addEventListener('click', () => {
    humanSelection = 'scissors';
    game();
})





 

