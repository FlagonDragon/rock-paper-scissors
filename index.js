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
