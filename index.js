// console.log('Ayyyy');

function getComputerChoice() {
    result = Math.random();
    if (result <= 0.33) {
        return 'Rock';
    } else if (result > 0.33 && result <= 0.66) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

function getHumanChoice() {
    result = prompt("Shoot!").toLowerCase();
    if (result === 'rock') {
        return 'Rock'
    } else if (result === 'paper') {
        return 'Paper'
    } else if (result === 'scissors') {
        return 'Scissors'
    } else {
        return 'WHATCHU ON ABOUT HOLMES!!!!'
    }
}

humanScore = 0;

computerScore = 0;

function playRound(humanChoice,computerChoice) {

console.log(humanChoice+' Vs. '+computerChoice);

if (humanChoice === 'Rock' && computerChoice === 'Paper') {
    ++computerScore
    return 'U lost boy!!! Paper ENVELOPS rock!!!';;
} else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
    ++humanScore
    return 'U won!!! Rock DEMOLISHES scissors!!! Kachow!!!!'
} else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
    ++humanScore
    return 'U won!!! Paper ENVELOPS rock!!! Kachow!!!!'
} else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
    ++computerScore
    return 'U lost boy!!! Scissors BUTCHER paper!!!'
} else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
    ++computerScore
    return 'U lost boy!!! Rock DEMOLISHES scissors!!!'
} else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
    ++humanScore
    return 'U won!!! Scissors BUTCHER paper!!! Kachow!!!!'
} else {
    return 'Uh-oh! Stalemate!!!'
}

}

function humanScoreText() {
    return `Your score: ${humanScore} points`
};

function computerScoreText() { 
    return `Opponent's score: ${computerScore} points`
};


function playGame() {



    console.log('Round 1!!!');

    console.log(playRound(getHumanChoice(),getComputerChoice()));

    console.log(humanScoreText());
    console.log(computerScoreText());
    console.log('');
    
    console.log('Round 2!!!');

    console.log(playRound(getHumanChoice(),getComputerChoice()));

    console.log(humanScoreText());
    console.log(computerScoreText());
    console.log('');

    console.log('Round 3!!!');

    console.log(playRound(getHumanChoice(),getComputerChoice()));
    
    console.log(humanScoreText());
    console.log(computerScoreText());
    console.log('');

    console.log('Round 4!!!');

    console.log(playRound(getHumanChoice(),getComputerChoice()));
    
    console.log(humanScoreText());
    console.log(computerScoreText());
    console.log('');

    console.log('Round 5!!!');

    console.log(playRound(getHumanChoice(),getComputerChoice()));   
    
    console.log(humanScoreText());
    console.log(computerScoreText());
    console.log('');

    console.log('It is over!!!!');
    
    if (humanScore > computerScore) {
        console.log('HUMONGOUS WIN. LET\'S GO CHAMP!!!!!');
    } else if (humanScore < computerScore){
        console.log('Utter defeat. You are a disappointment.');
    } else {
        console.log('You are evenly matched!!!');
    }
        
    console.log('Thanks for playing!!!');
    
};

playGame();