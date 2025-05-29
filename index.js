// console.log('Ayyyy');

function getComputerChoice() {
    result = Math.random();
    if (result <= 0.33) {
        return 'Rock';
    } else if (result > 0.33 && result <= 0.66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

const buttons = document.querySelectorAll('button')

keepPlaying = true;

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        playerSelection = button.id;

        if (keepPlaying === true) {

        playRound();

        }

    });

});

function getHumanChoice() {
    return playerSelection
};

function humanScoreText() {
    return `Your score: ${humanScore} points`
};

function computerScoreText() { 
    return `Opponent's score: ${computerScore} points`
};

humanScore = 0;

computerScore = 0;

playerSelection = '';

round = 1;

display = document.querySelector('#display');

    ownScore = document.createElement('p');
    oppScore = document.createElement('p');
    display.appendChild(ownScore);
    display.appendChild(oppScore);

    liveRound = document.createElement('p')
    display.appendChild(liveRound);

    choices = document.createElement('p')
    display.appendChild(choices)

    outcome = document.createElement('p')
    display.appendChild(outcome);


function playRound(humanChoice,computerChoice) {

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    liveRound.textContent = 'Round ' + round + '!!';

    choices.textContent = humanChoice+' Vs. '+computerChoice;
 

        if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            ++computerScore
            ++round
            outcome.textContent = 'U lost boy!!! Paper ENVELOPS rock!!!';;
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            ++humanScore
            ++round
            outcome.textContent = 'U won!!! Rock DEMOLISHES scissors!!! Kachow!!!!'
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            ++humanScore
            ++round
            outcome.textContent = 'U won!!! Paper ENVELOPS rock!!! Kachow!!!!'
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            ++computerScore
            ++round
            outcome.textContent = 'U lost boy!!! Scissors BUTCHER paper!!!'
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            ++computerScore
            ++round
            outcome.textContent = 'U lost boy!!! Rock DEMOLISHES scissors!!!'
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            ++humanScore
            ++round
            outcome.textContent = 'U won!!! Scissors BUTCHER paper!!! Kachow!!!!'
        } else {
            ++round
            outcome.textContent = 'Uh-oh! Stalemate!!!'
        }

    ownScore.textContent = humanScoreText();
    oppScore.textContent = computerScoreText();

    if (humanScore === 5 || computerScore === 5) {

        keepPlaying = false;

        endPhrase0 = document.createElement('p');
        endPhrase0.textContent = '---';
        display.appendChild(endPhrase0);

        endPhrase1 = document.createElement('p');
        endPhrase1.textContent = 'It is over!!!!';
        display.appendChild(endPhrase1);

        endPhrase2 = document.createElement('p');
        
        if (humanScore > computerScore) {
            endPhrase2.textContent = 'HUMONGOUS WIN. LET\'S GO CHAMP!!!!!';
        } else if (humanScore < computerScore){
            endPhrase2.textContent = 'Utter defeat. You are a disappointment.';
        } else {
            endPhrase2.textContent = 'You are evenly matched!!!';
        }
    
        display.appendChild(endPhrase2);

        endPhrase3 = document.createElement('p');
        endPhrase3.textContent = 'Thanks for playing!!!';
        display.appendChild(endPhrase3);
   
    }

};










