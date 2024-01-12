let compChoice = ["rock", "paper", "scissors"];
let comscore = 0;
let humanscore = 0;

function getComputerChoice(){
    let pick = compChoice[Math.floor(Math.random() * compChoice.length)];
    return pick;
}

function playGame(humanSelect, compSelect){
    
    if(compSelect === "paper" && humanSelect === "rock"){
        comscore = comscore + 1;
        return "Computer Win! Paper beats Rock"
    }
    else if(compSelect === "paper" && humanSelect === "scissors"){
        humanscore = humanscore + 1;
        return "You Win! Scissors beats Paper"
    }
    else if(compSelect === "scissors" && humanSelect === "rock"){
        humanscore = humanscore + 1;
        return "You Win! Rock beats Scissors"
    }
    else if(compSelect === "scissors" && humanSelect === "paper"){
        comscore = comscore + 1;
        return "Computer Win! Scissors beats Paper"
    }
    else if(compSelect === "rock" && humanSelect === "paper"){
        humanscore = humanscore + 1;
        return "You Win! Paper beats Rock"
    }
    else if(compSelect === "rock" && humanSelect === "scissors"){
        comscore = comscore + 1;
        return "Computer Win! Rock beats Scissors"
    }
    else if(compSelect === "scissors" && humanSelect === "scissors"){
        return "You chose the same, it's a tie!"
    }
    else if(compSelect === "rock" && humanSelect === "rock"){
        return "You chose the same, it's a tie!"
    }
    else if(compSelect === "paper" && humanSelect === "paper"){
        return "You chose the same, it's a tie!"
    }
    else{
        return "You typed wrong, choose again"
    }
}

function game(){
    let humanSelect = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    return humanSelect;
}

function loopGame(){
    for(i = 0; i < 5; i++){
    let humanSelect = game();
    console.log(`You chose ${humanSelect}`);
    let compSelect = getComputerChoice();
    console.log(`Computer chose ${compSelect}`);

    console.log(playGame(humanSelect, compSelect));
    console.log(`Computer Score: ${comscore} & Human Score: ${humanscore}`);
    console.log("");
    }
}


loopGame();

// let humanSelect = game();
// console.log(`You chose ${humanSelect}`);
// let compSelect = getComputerChoice();
// console.log(`Computer chose ${compSelect}`);

// console.log(playGame(humanSelect, compSelect));
