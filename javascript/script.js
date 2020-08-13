function getComputerOption(computerPick) {
    let pickOptions = ['rock', 'paper', 'scissors'];
    let randomPick = pickOptions[Math.floor(Math.random() * pickOptions.length)];
    return randomPick;
}
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreComputer = document.querySelector('.scoreC');
let scoreRetard = document.querySelector('.scoreR');
let retardChoice = document.querySelector('.retardChoice');
let computerChoice = document.querySelector('.computerChoice');
let winLoseMessage = document.querySelector('.winLoseMessage');
let audio = document.getElementById('myaudio')
let scoreR = 0;
let scoreC = 0;

rock.onclick = function getRock() {
    var objectPicked = 'rock';
    const playerSelection = getPlayerOption(objectPicked);
    const computerSelection = getComputerOption();
    return playRound(playerSelection, computerSelection)
}

paper.onclick = function getPaper() {
    var objectPicked = 'paper';
    const playerSelection = getPlayerOption(objectPicked);
    const computerSelection = getComputerOption();
    return playRound(playerSelection, computerSelection)
}

scissors.onclick = function getScissors() {
    var objectPicked = 'scissors';
    const playerSelection = getPlayerOption(objectPicked);
    const computerSelection = getComputerOption();
    return playRound(playerSelection, computerSelection)
}

function getPlayerOption(objectPicked) {
    if(objectPicked === 'rock') {
        var result = 'rock';
    } else if(objectPicked === 'paper') {
        var result = 'paper';
    } else if(objectPicked === 'scissors') {
        var result = 'scissors';
    }
    return result;
    }

function lose(playerSelection, computerSelection) {
    if(scoreC < 4) {
        scoreC++;
        scoreComputer.innerHTML = scoreC;
        winLoseMessage.innerHTML = 'actually retarded <br> nice pick lmao';
        } else {
            winLoseMessage.innerHTML = 'GAME OVER! You LOST! <br> You cant even win a luck based game <br>' + scoreR + ' - ' + (scoreC + 1);
            scoreC = 0;
            scoreR = 0;
            scoreComputer.innerHTML = scoreC;
            scoreRetard.innerHTML = 0;
            audio.play();
        }
    retardChoice.textContent = "You've made the dumb decission to choose: " + playerSelection;
    computerChoice.textContent = "Computer pick is: " + computerSelection;
}

function win(playerSelection, computerSelection) {
    if(scoreR < 4) {
    scoreR++
    scoreRetard.innerHTML = scoreR;
    winLoseMessage.textContent = 'meh';
    }else {
        winLoseMessage.innerHTML = 'GAME OVER! You WIN! <br> nicely done - belt is staying in <br>' + (scoreR + 1) + ' - ' + scoreC;
        scoreC = 0;
        scoreR = 0;
        scoreComputer.innerHTML = 0;
        scoreRetard.innerHTML = 0;
    }
    retardChoice.textContent = "You've made the dumb decission to choose: " + playerSelection;
    computerChoice.textContent = "Computer pick is: " + computerSelection;
}

function draw(playerSelection, computerSelection) {
    winLoseMessage.innerHTML = 'stop being idiot <br> TIE';
    retardChoice.textContent = "You've made the dumb decission to choose: " + playerSelection;
    computerChoice.textContent = "Computer pick is: " + computerSelection;
    if (scoreR == 5) {
        winLoseMessage.innerHTML = 'GAME OVER! You WIN! <br>' + scoreR  + ' - ' + scoreC;
        scoreC = 0;
        scoreR = 0;
        scoreComputer.innerHTML = 0;
        scoreRetard.innerHTML = 0;
    } else if (scoreC == 5) {
        winLoseMessage.innerHTML = 'GAME OVER! You LOST! <br>' + scoreR + ' - ' + scoreC;
        scoreC = 0;
        scoreR = 0;
        scoreComputer.innerHTML = 0;
        scoreRetard.innerHTML = 0;
    }
}



function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        draw(playerSelection, computerSelection);
        var result = 'DRAW';
    } else if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            lose(playerSelection, computerSelection);
            var result = 'Computer WINS';
        } else {
            win(playerSelection, computerSelection);
            var result = 'You WIN';
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'scissors') {
            lose(playerSelection, computerSelection);
            var result = 'Computer WINS';
        } else {
            win(playerSelection, computerSelection);
            var result = 'You WIN';
        }
     } else if(playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                lose(playerSelection, computerSelection);
                var result = 'Computer WINS';
            } else {
                win(playerSelection, computerSelection);
                var result = 'You WIN';
            }

        }

    }
