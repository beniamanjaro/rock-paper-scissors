let scoreComputer = document.querySelector('.scoreC');
let scoreRetard = document.querySelector('.scoreR');
let retardChoice = document.querySelector('.retardChoice')
let computerChoice = document.querySelector('.computerChoice')
let winLoseMessage = document.querySelector('.winLoseMessage')
let scoreR = 0;
let scoreC = 0;
if(result == 'You WIN' && scoreR < 5) {
    scoreR++;
    scoreRetard.textContent = scoreR;
    winLoseMessage.textContent = 'W';
} else if (result == 'Computer WINS' && scoreC < 5) {
    scoreC++;
    scoreComputer.textContent = scoreC;
    winLoseMessage.textContent = 'L';
}else if (playerSelection === computerSelection) {
        winLoseMessage.textContent = 'Draw!';
    }


retardChoice.textContent = "You've made the dumb decission to choose: " + playerSelection;
computerChoice.textContent = "Computer pick is: " + computerSelection;
return console.log('awafsfwaf ' + playerSelection + 'asfwafawf ' + computerSelection + ' REsult is: ' + result)