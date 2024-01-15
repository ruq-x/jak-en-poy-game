let comscore = 0;
let humanscore = 0;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const round = document.getElementById("round");
const roundExtra = document.getElementById("roundExtra");
const conclusion = document.getElementById("conclusion");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const againBtn = document.getElementById("replayBtn")

rockBtn.addEventListener("click", () => playClick("rock✊"));
paperBtn.addEventListener("click", () => playClick("paper✋"));
scissorsBtn.addEventListener("click", () => playClick("scissors✌"));
againBtn.addEventListener("click", () => replayFunction());

function replayFunction(){
    window.location.reload();
}

function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function playClick(humanSelect){
    const compSelect = getComputerChoice()
    playGame(humanSelect, compSelect)
}

function getComputerChoice(){
    let compChoice = ["rock✊", "paper✋", "scissors✌"];
    let pick = compChoice[Math.floor(Math.random() * compChoice.length)];
    return pick;
}

function playGame(humanSelect, compSelect){

    if( (humanSelect === 'rock✊' && compSelect === 'scissors✌') ||
        (humanSelect === 'scissors✌' && compSelect === 'paper✋') ||
        (humanSelect === 'paper✋' && compSelect === 'rock✊')){
            humanscore = humanscore + 1;
            round.textContent = (`You win! ${humanSelect} beats ${compSelect}`);
            conclusion.textContent = (`You chose ${humanSelect} | Computer chose ${compSelect}`)
            playerScore.textContent = (`Player: ${humanscore}`)
            
            if(humanscore == 5){
                disableButtons();
                round.textContent = "You win! You beat the computer!";
                conclusion.textContent = "";
                roundExtra.textContent = "";
                againBtn.style.display = "block";
            }

        }

    else if(humanSelect === compSelect){
        round.textContent = (`It's a tie!`);
        conclusion.textContent = (`You chose ${humanSelect} | Computer chose ${compSelect}`)
    }   

    else{
        comscore = comscore + 1;
        round.textContent = (`Computer wins! ${compSelect} beats ${humanSelect}`);
        conclusion.textContent = (`You chose ${humanSelect} | Computer chose ${compSelect}`)
        computerScore.textContent = (`Computer: ${comscore}`)

        if(comscore == 5){
            disableButtons();
            round.textContent = "Computer wins! Computer beats you!";
            conclusion.textContent = "";
            roundExtra.textContent = "";
            againBtn.style.display = "block";
        }
    }
}