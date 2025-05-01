console.log('Ayyyy');

function getComputerChoice() {
    result = Math.random();
    if (result <= 0.33) {
        return 'rock';
    } else if (result > 0.33 && result <= 0.66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    result = prompt("Shoot!")
    if (result === 'rock') {
        return 'rock'
    } else if (result === 'paper') {
        return 'paper'
    } else if (result === 'scissors') {
        return 'scissors'
    } else {
        return 'whatchu on about holmes'
    }
}

console.log(getHumanChoice());
